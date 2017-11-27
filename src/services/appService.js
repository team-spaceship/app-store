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

    const app_file_name = this.convertAppName(app.name);
    
    const versionScheme = new Version({
      id: version_id,
      version: app.version,
      file_name: `${app_file_name}-${app.version}`,
      publish_reviews: [],
      app: app_id,
    });
    
    const appScheme = new App({
      id: app_id,
      name: app.name,
      description: app.description,
      app_icon: app.app_icon,
      app_banner: app.app_banner,
      min_os_version: app.min_os_version,
      versions: [version_id],
      appDownloads: [],
      appRatings: [],
      appCategory: [],
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

  convertAppName(app_name) {
    return app_name.split(' ').join('-');
  }  
};

export default new appService();
