import User from '../schemas/User';

const userService = class UserService {
  async createUser(profile) {
    const userSchema = new User({
      first_name: profile.name.givenName,
      middle_name: '',
      last_name: profile.name.familyName,
      email: '',
      google_id: profile.id,
      last_login: new Date(),
      role: 1,
      active: 1,
      user_ips: [],
      publish_reviews: [],
      app_ratings: [],
      installed_apps: [],
    });
    
    try {
      await userSchema.save();
    } catch (e) {
      console.log(e);
    }
  }
};

export default new userService();
