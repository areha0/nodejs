// 构建OrderItemModel

const mongoose = require("./db");

const OrderItemSchema = mongoose.Schema({
  order_id: String,
  title: String,
  price: Number,
  num: Number
}, { versionKey: false });


const OrderItem = mongoose.model("Order_item", OrderItemSchema, "order_item");

module.exports = OrderItem;