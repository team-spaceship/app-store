import mongoose from 'mongoose';
import App from '../schemas/App';
import Version from '../schemas/Version';
import InstalledVersion from '../schemas/InstalledVersion';

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
    
    const versionScheme = new Version({
      _id: version_id,
      version: app.version,
      description: app.description,
      version_path: app.path,
      icon_path: app.icon_path || "",
      banner_path: app.banner_path || "",
      version_note: "",
      app: app_id,
      version_installs: [],
      version_ratings: [],
      publish_reviews: [],
    });
    
    try {
      versionScheme.save(async (err) => {
        const appScheme = new App({
          _id: app_id,
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
  
  async getAppById(id, user) {
    const app = await App.findById(id).exec();
    const detail_app = app.toObject();
    
    detail_app.is_installed = 0;
    
    const latest_version = await this.getLatestAppVersionByAppId(id);
    
    if (user) {
      const is_installed = await this.getInstalledApp(latest_version._id, user._id);
      
      detail_app.is_installed = is_installed.length;
    }

    detail_app.latest_version = latest_version;
    
    return detail_app;
  }
  
  async getLatestAppVersionByAppId(id) {
    const app = await App.findById(id).populate('versions').exec();
    const latest_version = app.versions[app.versions.length - 1];
    return latest_version;
  }
  
  async getInstalledAppsByUserId(user_id) {
    const user_apps = await InstalledVersion
      .find({ user: user_id })
      .populate('user')
      .populate('version')
      .populate({
        path: 'version',
        populate: { path: 'app' },
      })
      .exec();
    
    return user_apps;
  }
  
  async getInstalledApp(version_id, user_id) {
    const user_apps = await InstalledVersion
      .find({
        version: version_id,
        user: user_id,
      })
      .exec();
    
    return user_apps;
  }  
  
  async install(id, user) {
    try {
      const latest_version = await this.getLatestAppVersionByAppId(id);
      const is_installed = await this.getInstalledApp(latest_version._id, user._id);
      
      if (is_installed.length > 0) {
        throw new Error("App already installed.");
      }
      
      const installedVersionScheme = new InstalledVersion({
        user: user._id,
        version: latest_version,
      });
      
      await installedVersionScheme.save();
    } catch (e) {
      console.error(e);
      return e.message;
    }
  }
  
  async deleteApp(res, id) {
    try {
      // Not the nicest solution, but chaining the middleware functions didn't seem to work.
      const versions = await Version.find({ app: id }).exec();
      console.log(versions);

      versions.forEach((version) => {
        InstalledVersion.remove({ version: version._id }).exec();
      });
      
      const app = await App.findByIdAndRemove(id, () => {  
        const response = {
          message: "App successfully deleted",
          id,
        };
        res.status(200).send(response);
      });
    } catch (e) {
      console.log(e);
    } 
  }

  async uninstallApp(res, id) {
    try {
      // Not the nicest solution, but chaining the middleware functions didn't seem to work.
      const versions = await Version.find({ app: id }).exec();

      versions.forEach((version) => {
        InstalledVersion.remove({ version: version._id }).exec();
      });

      const response = {
        message: "App successfully uninstalled",
        id,
      };
      
      res.status(200).send(response);
    } catch (e) {
      console.log(e);
    }
  }  
};

export default new appService();
