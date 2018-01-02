import * as zip from "express-zip";

const path = require('path');

const downloadController = class DownloadController {
  /**
  * Download a ZIP
  * @param req
  * @param res
  * @param next
  */
  download(request, response) {
    const zip_path = path.join(__dirname, `/../../apps/${request.params.folder}/${request.params.version}/${request.params.zip}`);
    
    response.zip([
      { path: zip_path, name: `${request.params.zip}` },
    ]);
  }
};

export default new downloadController();
