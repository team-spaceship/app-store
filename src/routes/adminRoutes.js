import { authenticated } from '../middleware/passport';
import appController from "../controllers/appController";

export default class AdminRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.delete('/v1/admin/app/:id/delete', authenticated, appController.deleteApp);

    router.get('/v1/admin/deletelogs', authenticated, appController.getDeleteLogs);
  }  
}
