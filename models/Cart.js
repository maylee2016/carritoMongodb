// shopping cart

const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "PAID"],
    required: true
  },
  products: {
    type: String,
    required: true
  },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;