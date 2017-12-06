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
//      console.log(req.body.id + '\n' + req.body.first_name + '\n' + req.body.last_name + '\n' + req.body.email);
      User.findOneAndUpdate(
        { id: req.body.id },
        { 
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,   
        }
      );
      res.redirect('http://localhost:3001/profile');
    });
  }  
}
