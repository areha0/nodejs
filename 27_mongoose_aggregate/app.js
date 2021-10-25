const mongoose = require("mongoose");
const Order = require("./model/order");
const OrderItem = require("./model/Order_item");

// 1. 将order_item表聚合到order表中

// Order.aggregate([
// {
//   $lookup: {
//     // ** 注意: 这里的from, 对应的是原集合的名字, 而不是对应的model
//     // from: OrderItem,
//     from: "order_item",
//     localField: "order_id",
//     foreignField: "order_id",
//     as: "items"
//   }
// }
// ], (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log(JSON.stringify(result));
// })

// 2. 将order表聚合到order_item中
OrderItem.aggregate([
  {
    $lookup: {
      from: "order",
      localField: "order_id",
      foreignField: "order_id",
      as: "order_info"
    }
  },
  // ** 当我们使用 _id 进行查询时, 需要将 _id 转化为 object_id
  {
    // $match: { "title": "酸奶" }
    $match: { "_id": mongoose.Types.ObjectId("616e9cd31ee72da038e5ef68") }
  }
], (err, result) => {
  if (err) {
    console.log(err);
    return
  };
  console.log(JSON.stringify(result));
})