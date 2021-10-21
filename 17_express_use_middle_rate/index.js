// 中间件的介绍以及使用
// 中间件就是在路由跳转之前或是路由跳转之后指向相应的操作

const express = require("express");
const ejs = require("ejs");
const app = express();


// 5. 其实这里应该也是内置型中间件, 用于解析请求数据
// 通过form表单提交的post请求
app.use(express.urlencoded({ extended: false }));
// express解析json格式数据
app.use(express.json());


// *** 这里也很重要的是将 ejs引擎 转换为 html
app.engine("html", ejs.__express);
app.set("view engine", "html");


// 4. 内置中间件, 可以用于监测静态web服务
app.use(express.static("./public"));

// 1. 应用级中间件(可以用来进行权限判断), use()方法中嵌套一个函数
app.use((req, res, next) => {
  console.log(new Date());
  // 在next()方法之前可以进行权限判断, 只要使用next(), 代码才会继续执行下去
  next();
});

app.get("/", (req, res) => {
  res.send("nihaoa, zheshishouye")
});

// 2. 路由级中间件(使用较少)
// 使用情况, 路径可以匹配多个路由的情况, 只需要对后面的路由做出反应
app.get("/news/chain", (req, res, next) => {
  // res.send("这是中国的新闻");
  // 虽然下面的路由也可以匹配这个路径, 但是会在这里停止, 如果我们需要路径向下匹配, 可以使用中间件next()
  next()
});

app.get("/news/:id", (req, res) => {
  res.send("这是一个动态地新闻路由")
})


// 5. 第三方中间件, 有很多的第三方中间件, 
// 演示一下解析 post 传参的处理方法, get传参是用query处理, body-parser已经被弃用(是因为express内部已经可以解析数据)

app.get("/register", (req, res) => {
  res.render("register", {})
});

app.post("/toRegister", (req, res) => {
  let body = req.body;
  console.log(body);
  res.send("注册完成--" + body.name + "--" + body.age)
})

// 3. 错误处理中间件, 就是当前路径并没有相应路由与之匹配
app.use((req, res, next) => {
  res.status(404).send("404")
});
app.listen(8081);
console.log("http://127.0.0.1:8081");