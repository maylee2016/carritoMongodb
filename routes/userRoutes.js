const express = require("express");
const userController = require("./../controllers/userController");
const userRouter = express.Router();
//routes
userRouter
  .route("/")
  //.get(productController.getAllProducts)
  .all(authController.protect)
  .get(userController.getAllusers)
  .post(userController.addUser);
//productRouter.route("/:id").get(productController.getProductById);

//view, update and delete
userRouter.route("/:id")
    .all(authController.protect)
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = userRouter;
