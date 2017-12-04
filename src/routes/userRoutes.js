import { authenticated } from '../middleware/passport';
import User from '../schemas/User';

export default class AppRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/v1/profile', authenticated, async (req, res) => {
      res.json(req.user);
    });
    router.get('/v1/userInfo', (req, res) => {
      const loggedIn = Boolean(req && req.user);
      res.json({
        loggedIn,
        user: req && req.user,
      });
    });
    router.post('/v1/saveProfile', authenticated, (req, res) => {
/*      User.findOneAndUpdate(
        { id: req.id },
        { 
          first_name: req.first_name,
          last_name: req.last_name,
          email: req.email,   
        }
      );*/
      console.log(req);
    });
  }  
}
