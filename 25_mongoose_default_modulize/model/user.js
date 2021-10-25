// 在user.js中封装user集合的 schema 以及 model

// 1. schema中属性的修饰符
// 在schema的属性中可以添加修饰符: 预定义修饰符 trim, toUpperCase, toLowerCase; 自定义修饰符: set(), get()
// 可以在set()中添加代码, 用于处理输入的数据, 将处理后的数据存放到数据库中
// get()方法不常用, 可以在调用数据属性时, 对属性值进行修改

// 2. 添加索引: 将属性的index设置为true
// 3. mongoose中还有很多的内置CURD操作方法
// 4. 当然也可以自行封装方法: 静态方法(注意中间要添加statics), 实例方法(中间要添加methods)
const mongoose = require("./db")
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // trim:true,
    // set(params){ return ""},
    // get(params){return ""},
    index: true,
  },
  age: Number,
  sex: String,
  // 默认值的设置方式
  status: {
    type: Number,
    default: 1
  }
}, { versionKey: false });



// ** 5. 下面封装一个对象的静态方法
// 注意中间添加的为statics, 
UserSchema.statics.findByNameae = function (name, callback) {
  // ** 这里的this指向的是model
  this.find({ "name": name }, (err, result) => {
    callback(err, result)
  });
}

// 6. 下面添加一个实例方法
UserSchema.methods.print = function () {
  console.log("我是一个实例方法");
  console.log(this);
}

module.exports = mongoose.model("User", UserSchema, "user");