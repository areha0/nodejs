// express框架的使用
const { name } = require("ejs");
const express = require("express")
// express 实例化
const app = express()


// 1. 发送各种请求
// get请求用于显示数据
app.get("/", (req, res) => {
  res.send("你好啊,这是首页")
});
// post请求用于添加数据
app.post("/register", (req, res) => {
  console.log("发送post请求");
  res.send("发送post请求")
});
// put请求用于修改数据
app.put("/edit", (req, res) => {
  console.log("修改数据");
  res.send("发送put请求完成")
})
// delete请求用于删除数据
app.delete("/remove", (req, res) => {
  console.log("删除数据");
  res.send("发送delete请求完成")
})


// 2. 可以实现多级路径
app.get("/news/chain/today", (req, res) => {
  res.send("news chain today")
})

// 3. 可以使用动态请求, 并获取动态请求信息
// 动态请求的路径是在params中
app.get("/cate/:id", (req, res) => {

  console.log(req.params["id"]);
  res.send(req.params["id"])
})

// 4. 获取get请求传值
// 在之前需要获取get传值时需要使用URL类的searchParams, 在express中只需要query
app.get("/send", (req, res) => {
  let query = req.query;
  console.log(query);
  res.send("hello" + query["name"])
})

// 监听端口
app.listen(8081);
console.log("http://127.0.0.1:8081");