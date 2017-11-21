import Category from '../schemas/Category';

const categoryService = class CategoryService {
  /**
  * Returns all apps
  *
  * @returns [{orders}]
  */
  async getAllCategories(res) {
    const categories = await Category.find().exec();
    
    if (!categories) {
      return res.status(400).end();
    }
    
    return categories;
  }

  async createCategory(category) {
    console.log(category);
    const categoryScheme = new Category({
      name: category.name,
      tag: category.tag,
    });    
    
    await categoryScheme.save();
  }
};

export default new categoryService();
