// session是基于cookie实现的, cookie是存储在客户端浏览器上的, 并且数据最大为4kb, 并且不太安全
// session是存储在服务器上, 相对于cookie来说更加的安全, 但是如果是频繁的请求, 可能会增加服务器的负担

// 1. 首先是引入第三方模块 express-session
// npm install express-session --save

const express = require("express");
const session = require("express-session");

const app = express();
// 5.介绍一下session中的各项配置
// name: 用于修改session在浏览器端的名字
// rolling: 设置为true时可以自动在cookie失效前, 再次设置存活时间


// 2. 注册session
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
  rolling: false
}))

// 3. 设置 session : req.session.name = "shuosuo"
app.get("/", (req, res) => {
  req.session.name = "shuosuo";
  req.session.age = 22;
  res.send("这是首页")
})

// 4. 使用session : req.session.name 
app.get("/user", (req, res) => {
  let name = req.session.name;
  let age = req.session.age;
  if (name || age) {
    res.send(name + "-" + age + "-欢迎登陆")
  } else {
    res.send("还没登陆")
  }
})

// 6. session的销毁
app.get("/destroy", (req, res) => {
  // 1. 将所有的cookie存活时间设置为0
  // req.session.cookie.maxAge = 0;

  // 2. 将指定的session数据设置为空
  // req.session.name = "";

  // 3. 使用destroy()方法进行销毁
  req.session.destroy();
  res.send("销毁session")
})

app.listen(8081);
console.log("http://127.0.0.1:8081");