import categoryService from "../services/categoryService";

const categoryController = class CategoryController {
  /**
  * Returns all categories
  *
  * @param req
  * @param res
  * @param next
  */
  getAllCategories(req, res) {
    categoryService.getAllCategories(res).then(
      (result) => {
        res.json(result);
      },
      () => {
        res.status(500).send({ messsage: "Something went wrong" });
      },
    );
  }
  
  createCategory(req, res) {
    // Save the body, for easier use later on.
    const app = req.body;
    categoryService.createCategory(app).then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ messsage: "Something went wrong: " + error.messsage });
      },
    ); 
  }
};

export default new categoryController();
