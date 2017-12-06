import mongoose from 'mongoose';
import App from '../schemas/App';
import Version from '../schemas/Version';

const appService = class AppService {
  /**
  * Returns all apps
  *
  * @returns [{orders}]
  */
  async getAllApps(res) {
    const apps = await App.find().exec();
    
    if (!apps) {
      return res.status(400).end();
    }
    
    return apps;
  }
  
  async searchApps(query, res) {
    const apps = await App.find({ name: { $regex: '.*' + query + '.*', $options: "i" } }).exec();
    
    if (!apps) {
      return res.status(400).end();
    }
    
    return apps;
  }
  
  async createApp(app) {
    const app_id = mongoose.Types.ObjectId();
    const version_id = mongoose.Types.ObjectId();

    // @TODO: add publish review when creating an app

    console.log(app);

    const versionScheme = new Version({
      id: version_id,
      version: app.version,
      description: app.description,
      version_path: app.path,
      version_note: "",
      app: app_id,
      version_installs: [],
      version_ratings: [],
      publish_reviews: [],
    });
    
    const appScheme = new App({
      name: app.name,
      featured: false,
      versions: [version_id],
      app_category: [],
    });
    
    try {
      await versionScheme.save();
      await appScheme.save();
    } catch (e) {
      console.log(e);
    }
  }
  
  async getAppById(id, res) {
    console.log(id);
    const app = await App.findById(id).exec();
    
    if (!app) {
      return res.status(400).end();
    }
    
    return app;
  }
};

export default new appService();
