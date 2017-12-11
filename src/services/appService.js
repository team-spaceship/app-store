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
    const apps = await App.find().populate('versions').exec();

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
      _id: version_id,
      version: app.version,
      description: app.description,
      version_path: app.path,
      version_note: "",
      app: app_id,
      version_installs: [],
      version_ratings: [],
      publish_reviews: [],
    });

    try {
      versionScheme.save(async (err) => {
        const appScheme = new App({
          name: app.name,
          featured: false,
          versions: [versionScheme._id],
          app_category: [],
        });
        await appScheme.save();
      });
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

  async install(id, res) {
    const app = await App.findById(id).exec();

    if (!app) {
      return res.status(400).end();
    }

    return app;
  }  
};

export default new appService();
