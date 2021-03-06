import appService from "../services/appService";
import deleteLogService from '../services/deleteLogService';

const appController = class AppController {
  /**
  * Returns all apps
  *
  * @param req
  * @param res
  * @param next
  */
  getAllApps(req, res) {
    // Search for apps with the corresponding name (query param).
    if (req.query.name) {
      appService.searchApps(req.query.name, res).then(
        (result) => {
          res.json(result);
        },
        () => {
          res.status(500).send({ message: "Something went wrong" });
        },
      );
    } else { // If no query parameter is given, return all apps.
      appService.getAllApps(res).then(
        (result) => {
          res.json(result);
        },
        () => {
          res.status(500).send({ message: "Something went wrong" });
        },
      );
    }
  }

  createApp(req, res) {
    // Save the body, for easier use later on.
    const app = req.body;
    appService.createApp(app).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    ); 
  }

  getAppById(req, res) {
    appService.getAppById(req.params.id, req.user).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error });
      },
    );
  }

  install(req, res) {
    appService.install(req.params.id, req.user).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    );
  }

  installedApps(req, res) {
    let user_id = req.query.user_id || req.user._id;

    if (user_id === "undefined") {
      user_id = req.user._id;
    }

    console.log("user_id", user_id);
    console.log("query: ", req.query.user_id);

    appService.getInstalledAppsByUserId(user_id).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    );
  }  

  deleteApp(req, res) {
    appService.deleteApp(res, req.params.id, req.user).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    );
  }

  getDeleteLogs(req, res) {
    deleteLogService.getDeleteLogs(res, req.params.id).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    );
  }

  uninstallApp(req, res) {
    appService.uninstallApp(res, req.params.id).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ message: "Something went wrong: " + error.message });
      },
    );
  }  
};

export default new appController();
