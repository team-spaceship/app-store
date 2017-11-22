import * as zip from "express-zip";

const downloadController = class DownloadController {
  /**
  * Download a ZIP
  * @param req
  * @param res
  * @param next
  */
  download(request, response) {
    response.zip([
      { path: __dirname + `/../../apps/${request.params.zip}`, name: `${request.params.zip}` },
    ]);
  }
};

export default new downloadController();
