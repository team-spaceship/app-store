/**
 * Created by oteken on 11/24/2017.
 */
const makeDir = require('make-dir');
const path = require('path');

const uploadFolderPath = path.join(__dirname + "/../../apps");


const uploadController = class uploadController {
  upload(req, res) {
    const jsFile = req.files.jsFile;
    const cssFile = req.files.cssFile;
    const appFolderName = req.body.name;
    const appPath = path.normalize(uploadFolderPath + "/" + appFolderName);
    makeDir(appPath).then(() => {
      jsFile.mv(appPath + "/" + jsFile.name, (err) => {
        if (err) {
          res.status(500).send({ messsage: "Something went wrong while uploading files" });
        }
      });
      cssFile.mv(appPath + "/" + cssFile.name, (err) => {
        if (err) {
          res.status(500).send({ messsage: "Something went wrong while uploading files" });
        }
      });
    });
    res.status(200).send({ messsage: "Files uploaded :)" });
  }
};

export default new uploadController();
