import appService from "../services/appService";

const request = require('request');
const fs = require('fs');
const AdmZip = require('adm-zip');
const makeDir = require('make-dir');
const path = require('path');

const uploadFolderPath = path.join(__dirname + "/../../apps");

/**
 * @param url, url where the remote file is downloaded from
 * @param path, the local filepath where the downloaded remote file is streamed into
 */
function downloadFromUrlToFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath);
    request(url).pipe(writeStream)
      .on('finish', () => {
        resolve();
      });
  });
}

const uploadController = class uploadController {
  /**
   * @param req
   * @param res
   */
  async upload(req, res) {
    const appName = req.body.name;
    const appDownloadZipUrl = req.body.url;
    const version = req.body.version;
    const description = req.body.description;

    // @TODO validate input

    const pathToVersionFolder = path.normalize(uploadFolderPath + "/" + appName + "/" + version);
    const versionFilePath = path.normalize(pathToVersionFolder + "/" + version + ".zip");

    await makeDir(pathToVersionFolder);
    await downloadFromUrlToFile(appDownloadZipUrl, versionFilePath);

    // @TODO validate zip content

    const zip = AdmZip(versionFilePath);
    const projectFolderName = zip.getEntries()[0].entryName;
    const bannerPath = `${projectFolderName}assets/images/banner.png`;
    const iconPath = `${projectFolderName}assets/icon.svg`;
    zip.extractEntryTo(bannerPath, pathToVersionFolder, false, true);
    zip.extractEntryTo(iconPath, pathToVersionFolder, false, true);
    const appAsJson = {
      name: appName,
      version,
      description,
      path: pathToVersionFolder,
    };

    appService.createApp(appAsJson);

    res.status(200).send({ messsage: "Gud Job :)" });
  }
};

export default new uploadController();
