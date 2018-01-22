import appService from "../services/appService";

const request = require('request');
const fs = require('fs');
const AdmZip = require('adm-zip');
const makeDir = require('make-dir');
const path = require('path');
const Storage = require('@google-cloud/storage');

const uploadFolderPath = path.join(__dirname + "/../../apps");

const obj = JSON.parse(process.env.GOOGLE_CLIENT_KEY);

// Log in to googlee
const storage = new Storage({
  projectId: process.env.GOOGLE_BUCKET,
  credentials: {
    private_key: obj.private_key,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  },
});

const uploadController = class UploadController {
  constructor() {
    this.appName = "";
    this.appDownloadZipUrl = "";
    this.version = "";
    this.description = "";
    this.pathToVersionFolder = "";
    this.versionFilePath = "";

    this.init();
  }

  init() {
    const bucket = storage.bucket("lumos");

    bucket.iam.getPolicy((err, policy, apiResponse) => {});

    //-
    // If the callback is omitted, we'll return a Promise.
    //-
    bucket.iam.getPolicy().then((data) => {
      const policy = data[0];
      const apiResponse = data[1];
    });

    //-
    // Make all of the files currently in a bucket publicly readable.
    //-
    const options = {
      entity: 'allUsers',
      role: storage.acl.READER_ROLE,
    };

    //-
    // Make any new objects added to a bucket publicly readable.
    //-
    bucket.acl.add(options, (err, aclObject) => {});

    bucket.makePublic();
  }

  /**
   * @param url, url where the remote file is downloaded from
   * @param path, the local filepath where the downloaded remote file is streamed into
   */
  async downloadFromUrlToFile(url, filePath) {
    const zip_url = `${url}/archive/master.zip`;

    return new Promise((resolve, reject) => {
      try {
        const writeStream = fs.createWriteStream(filePath);
        request(zip_url).pipe(writeStream)
          .on('finish', () => {
            resolve({ success: true, message: `Downloaded: ${zip_url}`, path: filePath });
          }).on('error', (e) => {
            console.log(e);
            reject(e);
            throw new Error(e);
          });        
      } catch (e) {
        reject(e);
      }
    });
  }
  
  /**
   * @param req
   * @param res
   */
  async upload(req, res) {
    try {
      this.appName = req.body.name;
      this.appDownloadZipUrl = req.body.url;
      this.version = req.body.version;
      this.description = req.body.description;

      // @TODO validate input
      this.pathToVersionFolder = path.normalize(uploadFolderPath + "/" + this.convertAppName(this.appName) + "/" + this.version);
      this.versionFilePath = path.normalize(this.pathToVersionFolder + "/" + this.version + ".zip");

      await makeDir(this.pathToVersionFolder);
      const downloaded = await this.downloadFromUrlToFile(this.appDownloadZipUrl, this.versionFilePath);

      await this.uploadFile("lumos", this.versionFilePath);

      if (downloaded && downloaded.success === true) {
        await this.createZip();
      } else {
        throw new Error(`could not download ${this.appName}`);
      }

      const appAsJson = {
        name: this.appName,
        version: this.version,
        description: this.description,
        icon_path: `https://storage.googleapis.com/lumos/icon-${this.convertAppName(this.appName)}-${this.version}.svg`,
        banner_path: `https://storage.googleapis.com/lumos/banner-${this.convertAppName(this.appName)}-${this.version}.png`,
        path: path.join(`${this.convertAppName(this.appName)}/${this.version}/${this.version}.zip`),
      };

      await appService.createApp(appAsJson);          

      res.status(200).send({ success: true, messsage: "Gud Job :)" });
    } catch (error) {
      console.log(error);
      res.status(200).send({ success: false, messsage: `Something went wrong: ${error.message}` });
    }
  }

  async createZip() {
    try {
      // @TODO validate zip content
      const zip = AdmZip(this.versionFilePath);

      const projectFolderName = zip.getEntries()[0].entryName;
      const bannerPath = path.join(`${projectFolderName}assets/images/banner.png`);
      const iconPath = path.join(`${projectFolderName}assets/icon.svg`);

      await zip.extractEntryTo(bannerPath, this.pathToVersionFolder, false, true);
      await zip.extractEntryTo(iconPath, this.pathToVersionFolder, false, true);

      await this.uploadBannerAndIcon("lumos", path.join(this.pathToVersionFolder, "banner.png"), "banner");
      await this.uploadBannerAndIcon("lumos", path.join(this.pathToVersionFolder, "icon.svg"), "icon");
    } catch (e) {
      console.log(e);
      throw new Error("Make sure ZIP is valid and manditory files are presen in REPO");
    }
  }

  async uploadBannerAndIcon(bucketName, filename, type) {
    const rename = `${type}-${this.convertAppName(this.appName)}-${this.version}`;

    await storage
      .bucket(bucketName)
      .upload(filename, { public: true })
      .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
      })
      .catch((err) => {
        console.error('ERROR:', err);
        throw new Error(err);
      });

    const file_type = type === "icon" ? ".svg" : ".png";

    await storage
      .bucket(bucketName)
      .file(`${type}${file_type}`)
      .move(`${rename}${file_type}`)
      .then(() => {
        console.log(`${filename} renamed to ${rename}.`);
      })
      .catch((err) => {
        console.error('ERROR:', err);
        throw new Error(err);
      });         
  }

  async uploadFile(bucketName, filename) {
    const newFileName = `${this.convertAppName(this.appName)}-${this.version}.zip`;

    await storage
      .bucket(bucketName)
      .upload(filename, { public: true });
      
    console.log(`${filename} uploaded to ${bucketName}.`);

    await storage
      .bucket(bucketName)
      .file(`${this.version}.zip`)
      .move(newFileName);
    
    console.log(`${filename} renamed to ${newFileName}.`);   
  }  

  convertAppName(app_name) {
    return app_name.split(' ').join('-');
  }  
};

export default new uploadController();
