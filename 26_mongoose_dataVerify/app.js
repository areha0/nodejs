// 1. 首先是mongoose中schema中参数的默认值
// 2. 将mongoose进行模块化打包

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/itying", (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log("连接成功");
// });

// 注意: 如果在添加时添加了schema中未声明的属性, 那么就不会出现在数据库中
// const UserSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   sex: String,
//   // 默认值的设置方式
//   status: {
//     type: Number,
//     default: 1
//   }
// });

// let User = mongoose.model("User", UserSchema, "user");

const User = require("./model/user")

// User.find({}, (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log(result);
// })

// ** 封装的静态方法演示
// User.findByNameae("shuosuo", (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log(result);
// });

// ** 封装的实例方法演示
let user = new User({
  name: "angshuo",
  age: 18,
  sex: "male"
});

user.print();