/**
 * Created by oteken on 11/24/2017.
 */
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

const uploadController = class uploadController {
  /**
   * Upload files via multipart/form-data
   * @param req, should contain all files mandatory for an application
   * @param res
   * @param next
   */
  upload(req, res) {
    const jsFile = [req.files.jsFile][0];
    const cssFile = [req.files.cssFile][0];
    const bannerFile = [req.files.bannerFile][0];
    const iconFile = [req.files.iconFile][0];
    const appFolderName = req.body.name;
    const appPath = path.normalize(uploadFolderPath + "/" + appFolderName);
    if (!(jsFile && cssFile && bannerFile && iconFile && appFolderName)) {
      res.status(400).send({ messsage: "Something went wrong while uploading files" });
      return;
    }
    makeDir(appPath).then(() => {
      moveFile(jsFile, appPath, (err) => {
        res.status(500).send({ messsage: "Something went wrong while uploading files" });
      });
      moveFile(cssFile, appPath, (err) => {
        res.status(500).send({ messsage: "Something went wrong while uploading files" });
      });
      moveFile(bannerFile, appPath, (err) => {
        res.status(500).send({ messsage: "Something went wrong while uploading files" });
      });
      moveFile(iconFile, appPath, (err) => {
        res.status(500).send({ messsage: "Something went wrong while uploading files" });
      });
    });
    res.status(200).send({ messsage: "Files uploaded :)" });
  }
};

export default new uploadController();
