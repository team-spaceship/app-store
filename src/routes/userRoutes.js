import appController from "../controllers/appController";
import { authenticated } from '../middleware/passport';

export default class AppRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/profile', authenticated, async (req, res) => {
      res.json(req.user);
    });
    
  }  
}
