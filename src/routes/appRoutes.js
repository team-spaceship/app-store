import appController from "../controllers/appController";

export default class AppRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/v1/apps', appController.getAllApps);

    router.get('/v1/apps/:id', appController.getAppById);
    
    router.post('/v1/apps', appController.createApp);
  }  
}
