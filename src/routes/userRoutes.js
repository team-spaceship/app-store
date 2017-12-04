import { authenticated } from '../middleware/passport';

export default class AppRoutes {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/v1/profile', authenticated, async (req, res) => {
      res.json(req.user);
    });
    router.get('/v1/authenticated', (req, res) => {
      const loggedIn = Boolean(req && req.user);
      res.json({ loggedIn });
    });
  }  
}
