import App from '../schemas/App';

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
    const appScheme = new App({
      name: app.name,
      description: app.description,
      app_icon: app.app_icon,
      app_banner: app.app_banner,
      min_os_version: app.min_os_version,
      version: app.version,
    });    
    
    await appScheme.save();
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
