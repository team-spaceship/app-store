import downloadController from "../controllers/downloadController";

export default class DownloadRoutes {
  /**
  * Create the download routes.
  */
  static create(router) {
    router.get('/download/:folder/:version/:zip', downloadController.download);
  }
}
