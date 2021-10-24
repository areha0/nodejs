// 在db.js中封装数据库的连接操作
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/itying", (err, result) => {
  if (err) {
    console.log(err);
    return
  };
  console.log("连接成功");
});

module.exports = mongoose;