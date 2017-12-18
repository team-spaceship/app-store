/**
 * Created by oteken on 11/22/2017.
 */
import uploadController from "../controllers/uploadController";

export default class UploadRoutes {
  /**
   * Create upload routes.
   * @param routerController that handles the requests.
   */
  static create(router) {
    router.post('/v1/upload', uploadController.upload);
  }
}
