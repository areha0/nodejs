// 这里连接数据库
const mongoose = require("mongoose");

const config = require("../config/config")

// 将连接的地址, 放在外部, 容易维护
mongoose.connect(config.dbURL, (err) => {
  if (err) {
    console.log(err);
    return
  };
  console.log("数据库连接成功");
});

module.exports = mongoose;