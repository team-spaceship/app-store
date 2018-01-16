import * as zip from "express-zip";

const path = require('path');
const Storage = require('@google-cloud/storage');

const downloadController = class DownloadController {
  /**
  * Download a ZIP
  * @param req
  * @param res
  * @param next
  */
  async download(request, response) {
    try {
      // Log in to googlee
      const obj = JSON.parse(process.env.GOOGLE_CLIENT_KEY);

      // Log in to googlee
      const storage = new Storage({
        projectId: process.env.GOOGLE_BUCKET,
        credentials: {
          private_key: obj.private_key,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
      });
            
      const zip_path = path.join(__dirname, `/../../apps/${request.params.folder}-${request.params.zip}`);

      const options = {
        // The path to which the file should be downloaded, e.g. "./file.txt"
        destination: zip_path,
      };

      const storage_result = await storage
        .bucket("lumos")
        .file(`${request.params.folder}-${request.params.zip}`)
        .download(options);

      console.log(`gs://lumos/${request.params.folder}-${request.params.zip} downloaded to ${zip_path}.`);

      response.zip([
        { path: zip_path, name: `${request.params.zip}` },
      ]);
    } catch (error) {
      throw new Error(`Something went terribly wrong.. ${error}`);
    }
  }
};

export default new downloadController();
