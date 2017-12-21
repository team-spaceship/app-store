import { authenticated } from '../middleware/passport';
import User from '../schemas/User';

export default class UserRoutes {
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
    router.post('/v1/saveProfile', authenticated, async (req, res) => {
      try {
        await User.findOneAndUpdate(
          { _id: req.body.id },
          { 
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,   
          },
          { upsert: true },
        );
      } catch (e) {
        console.log(e);
      }

      if (req.headers.origin.indexOf('3001') !== -1) { // for development purposes
        res.redirect('http://localhost:3001/profile');
      }

      res.redirect('/profile');
    });
  }  
}
