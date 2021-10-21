// 1. 使用express配置ejs
const express = require("express")
const app = express();

// 在express中使用ejs, 不需要手动引入ejs, 直接使用就可以
// *** 在set方法中的第一个参数默认情况下是 "view engine", ejs文件存放的文件夹名字为 views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let msg = "你好a,我是ejs文件";
  res.render("home", { msg })
})

// 2. 使用express托管静目录文件
app.use(express.static("static"))
// *** 注意在ejs文件中引入css文件时, 其正确的引入路径应该是相对于index.js文件的


app.listen(8081);
console.log("http://127.0.0.1:8081");