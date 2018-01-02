import appService from "../services/appService";

const request = require('request');
const fs = require('fs');
const AdmZip = require('adm-zip');
const makeDir = require('make-dir');
const path = require('path');

const uploadFolderPath = path.join(__dirname + "/../../apps");

const uploadController = class UploadController {
  constructor() {
    this.appName = "";
    this.appDownloadZipUrl = "";
    this.version = "";
    this.description = "";
    this.pathToVersionFolder = "";
    this.versionFilePath = "";
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

      if (downloaded && downloaded.success === true) {
        await this.createZip();
      } else {
        throw new Error(`could not download ${this.appName}`);
      }

      const appAsJson = {
        name: this.appName,
        version: this.version,
        description: this.description,
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
      console.log(this.versionFilePath);

      // @TODO validate zip content
      const zip = AdmZip(this.versionFilePath);

      const projectFolderName = zip.getEntries()[0].entryName;
      const bannerPath = path.join(`${projectFolderName}assets/images/banner.png`);
      const iconPath = path.join(`${projectFolderName}assets/icon.svg`);

      await zip.extractEntryTo(bannerPath, this.pathToVersionFolder, false, true);
      await zip.extractEntryTo(iconPath, this.pathToVersionFolder, false, true);
    } catch (e) {
      throw new Error("Make sure ZIP is valid and manditory files are presen in REPO");
    }
  }

  convertAppName(app_name) {
    return app_name.split(' ').join('-');
  }  
};

export default new uploadController();
