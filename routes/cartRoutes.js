const express = require("express");
const cartController = require("./../controllers/cartController");
const authController = require("./../controllers/authController");
const cartRouter = express.Router();

//routes
cartRouter
    .route("/")
    .all(authController.protect)
    .get(cartController.getAllCart);
cartRouter.post('/product', authController.protect, cartController.addCartProduct)
cartRouter.post('/pay', authController.protect, cartController.payCartProduct)
cartRouter.delete('/product/:id', authController.protect, cartController.deleteCartProduct)

module.exports = cartRouter;