// 在user.js中封装user集合的 schema 以及 model
const mongoose = require("./db")
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  // 默认值的设置方式
  status: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("User", UserSchema, "user");