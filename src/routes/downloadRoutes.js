import downloadController from "../controllers/downloadController";

export default class AppRoutes {
  /**
  * Create the download routes.
  */
  static create(router) {
    router.get('/download/:zip', downloadController.download);
  }
}
