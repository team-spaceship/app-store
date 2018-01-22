import { authenticated } from '../middleware/passport';
import appController from "../controllers/appController";

export default class AppRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/v1/apps', appController.getAllApps);

    router.get('/v1/installed-apps', authenticated, appController.installedApps);
    router.get('/v1/installed-apps-unsafe', appController.installedApps);
    
    router.get('/v1/apps/:id', appController.getAppById);

    router.get('/v1/apps/install/:id', authenticated, appController.install);
    
    router.post('/v1/apps', appController.createApp);

    router.delete('/v1/apps/:id/uninstall', authenticated, appController.uninstallApp);
  }  
}
