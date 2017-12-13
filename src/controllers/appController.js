import appService from "../services/appService";

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
          res.status(500).send({ messsage: "Something went wrong" });
        },
      );
    } else { // If no query parameter is given, return all apps.
      appService.getAllApps(res).then(
        (result) => {
          res.json(result);
        },
        () => {
          res.status(500).send({ messsage: "Something went wrong" });
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
        res.status(500).send({ messsage: "Something went wrong: " + error.messsage });
      },
    ); 
  }

  getAppById(req, res) {
    appService.getAppById(req.params.id, req.user).then(
      (result) => {
        console.log(result);
        res.json(result);
      },
      (error) => {
        console.log(error);
        res.status(500).send({ messsage: "Something went wrong: " + error });
      },
    );
  }

  install(req, res) {
    appService.install(req.params.id, req.user).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ messsage: "Something went wrong: " + error.messsage });
      },
    );
  }

  installedApps(req, res) {
    appService.getInstalledAppsByUserId(req.user._id).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ messsage: "Something went wrong: " + error.messsage });
      },
    );
  }  
};

export default new appController();
