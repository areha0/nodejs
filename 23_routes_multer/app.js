// 在这里我们将路由进行模块化
// 我们需要将整个项目分为 后台管理, 前台pc, 以及api接口
const express = require("express");
const app = express();

const ejs = require("ejs");
// 设置模板引擎
app.engine("html", ejs.__express);
app.set("view engine", "html");

// *******如果要解析post请求的数据, 一定要设置这个
// 通过form表单提交的post请求
app.use(express.urlencoded({ extended: false }));
// express解析json格式数据
app.use(express.json());



// 引入express的route模块
const admin = require("./routes/admin.js");
const front = require("./routes/front.js");

app.get("/", (req, res) => {
  res.send("这是首页")
});

app.use("/admin", admin);
app.use("/front", front);

app.listen(8081);
console.log("http://127.0.0.1:8081");