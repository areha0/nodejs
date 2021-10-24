// 借助于第三方插件 mongoose 来操作mongoDB数据库
// 1. 安装插件 mongoose, 并引入
// npm install mongoose --save

const mongoose = require("mongoose");

// 2. 与数据库建立连接
mongoose.connect(" mongodb://127.0.0.1:27017/itying");

// 3. 定义一个Schema(模式): 在schema中可以设置给参数数值类型
// 注意第二个参数是防止添加数据时自动添加版本号
let UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String
}, { versionKey: false });

// 4. 定义操作数据库的model
// 注意model中的参数: 第一个参数首字母大写, 第三个参数为需要操作的具体集合(如果不指定, 则默认第一个参数的复数形式)
let User = mongoose.model("User", UserSchema, "user")

// 5. 查询数据
// User.find({}, (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log(result);
// });

// 6. 添加数据
// 先对model进行实例化, 然后条用save()方法进行添加

// let data = new User({
//   name: "孙鲁育",
//   age: 16,
//   sex: "female"
// });

// data.save((err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log("添加数据成功");
// });

// 7. 更新数据
// User.updateOne({ "name": "孙鲁育" }, { "name": "孙鲁班", "age": 22 }, (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   };
//   console.log(result);
// });

// 8. 删除数据
User.deleteOne({ "name": "孙鲁育" }, (err, result) => {
  if (err) {
    console.log(err);
    return
  };
  console.log(result);
})