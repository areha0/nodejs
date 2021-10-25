// 在user.js中封装user集合的 schema 以及 model
// 1. mongoose的数据校验
// required : 表示这个数据必须传入
// max: 用于Number类型的最大值限定
// min: 用于Number类型的最小值限定
// enum: 枚举值, 用于String类型, 要求数据必须满足枚举值 enum:["0", "1"]
// match: 数据必须满足正则规则
// maxLength: 满足最大长度
// minLength: 满足最小长度
// validate: 自定义验证器,对应一个匿名函数, 如果返回值为true则符合, 如果返回值为false则不符合

const mongoose = require("./db")
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  age: {
    type: Number,
    validate: function (val) {
      return val > 18
    }
  },
  sex: String,
  status: {
    type: Number,
    default: 1
  }
}, { versionKey: false });



module.exports = mongoose.model("User", UserSchema, "user");