import orderService from "../services/orderService";

const orderController = class OrderController {
  /**
  * Returns all orders
  *
  * @param req
  * @param res
  * @param next
  */
  getAllOrders(req, res, next) {
    orderService.getAllOrders().then(
      (result) => {
        res.json(result);
      },
      (error) => {
        res.status(500).send({ messsage: "Something went wrong" });
      },
    );
  }
};

export default new orderController();
