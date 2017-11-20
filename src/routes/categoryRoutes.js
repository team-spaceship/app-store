import categoryController from "../controllers/categoryController";

export default class CategoryRoutess {
  /**
  * Create the app routes.
  */
  static create(router) {
    router.get('/v1/categories', categoryController.getAllCategories);
    
    router.post('/v1/categories', categoryController.createCategory);
  }  
}
