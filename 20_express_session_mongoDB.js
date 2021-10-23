// 这里主要将一下将session中的数据存储到mongoDB数据库中
// 1. 首先安装第三方模块: npm install connect-mongo --save
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();

app.use(session({
  secret: 'first session', // 在服务器中的标签(签字)
  name: "user",
  resave: false, // 强制保存session, 即使它没有发生改变
  saveUninitialized: true, // 强制保存session, 即使它没有初始化
  cookie: {
    // 其实就是cookie中的配置项设置, 因为session是基于cookie实现的
    maxAge: 1000 * 60 * 60,
    secure: false
  },
  rolling: false,
  // 2. 配置store项, 其中mongoUrl为连接的mongo数据库, 后面的路径表示的是操作的数据库, 如果不存在则创建一个, 并且生成一个集合sessions
  store: MongoStore.create({
    mongoUrl: " mongodb://127.0.0.1:27017/shop",
    //懒加载, 24小时之内的所有请求只会使数据库更新一次, 除非是会改变数据库的内容
    touchAfter: 24 * 3600,
  })
}))


app.get("/", (req, res) => {
  req.session.name = "shuosuo";
  req.session.age = 22;
  res.send("这是首页")
})


app.get("/user", (req, res) => {
  let name = req.session.name;
  let age = req.session.age;
  if (name || age) {
    res.send(name + "-" + age + "-欢迎登陆")
  } else {
    res.send("还没登陆")
  }
})


app.listen(8081);
console.log("http://127.0.0.1:8081");