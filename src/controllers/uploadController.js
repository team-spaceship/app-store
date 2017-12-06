const request = require('request');
const fs = require('fs');
const AdmZip = require('adm-zip');
const makeDir = require('make-dir');
const path = require('path');

const uploadFolderPath = path.join(__dirname + "/../../apps");

function moveFile(file, directory, callback) {
  file.mv(directory + "/" + file.name, (err) => {
    if (err) {
      callback(err);
    }
  });
}

/**
 * @param url, url where the remote file is downloaded from
 * @param path, the local filepath where the downloaded remote file is streamed into
 */
function downloadFromUrlToFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath);
    const requestUrl = request(url).pipe(writeStream);
    requestUrl.on('end', () => {
      writeStream.end();
      writeStream.on('finish', resolve());
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
    console.log(appName);
    console.log(appDownloadZipUrl);
    console.log(version);
    console.log(description);
    // Validate app name
    // Return error if invalid
    // Validate version
    // Return error if invalid
    // Create folder for new app
    // Download zip
    const pathToVersionFolder = path.normalize(uploadFolderPath + "/" + appName + "/" + version);
    const versionFilePath = path.normalize(pathToVersionFolder + "/" + version + ".zip");
    await makeDir(pathToVersionFolder);
    await downloadFromUrlToFile(appDownloadZipUrl, versionFilePath);
    // if failed return error to user
    // Validate zip content
    // if not correct content return error to user and delete zip
    // Unzip banner and icon
    const zip = AdmZip(versionFilePath);
    const bannerPath = path.normalize(versionFilePath + "/assets/images/banner.png");
    const iconPath = path.normalize(versionFilePath + "/assets/images/icon.png");
    zip.extractEntryTo(bannerPath, pathToVersionFolder, false, true);
    zip.extractEntryTo(iconPath, pathToVersionFolder, false, true);
    // Store app data into database through appService.js
    // Return to user with succeeded message.
    res.status(200).send({ messsage: "Gud Job :)" });
  }
};

export default new uploadController();
