import downloadController from "../controllers/downloadController";

export default class DownloadRoutes {
  /**
  * Create the download routes.
  */
  static create(router) {
    router.get('/download/:zip', downloadController.download);
  }
}
