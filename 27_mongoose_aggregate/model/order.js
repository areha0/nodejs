// 构建OrderModel

const mongoose = require("./db");

const OrderSchema = mongoose.Schema({
  order_id: String,
  uid: Number,
  trade_no: String,
  all_price: Number,
  all_num: Number
}, { versionKey: false });


const Order = mongoose.model("Order", OrderSchema, "order");

module.exports = Order;