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
    if (req.query.name || req.query.category) { // Filter app results.
      if (req.query.category) { // Search for apps that have a certain category.
        console.log("Searching with category");
        appService.searchAppsWithCategory(req.query.name, req.query.category, res).then(
          (result) => {
            res.json(result);
          },
          () => {
            res.status(500).send({ messsage: "Something went wrong" });
          },
        );
      } else { // Search for apps without checking for category.
        console.log("Searching without category");
        appService.searchApps(req.query.name, res).then(
          (result) => {
            res.json(result);
          },
          () => {
            res.status(500).send({ messsage: "Something went wrong" });
          },
        );
      }
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
};

export default new appController();
