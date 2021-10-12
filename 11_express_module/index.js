// 尝试封装express框架
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
let app = require("./express");



// 1. 初始的http模块
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);


// 2. 对http模块进行改造
http.createServer(app).listen(8081);

app.get("/", (request, response) => {
  response.send(200, "则是首页")
})
app.get("/login", (request, response) => {
  fs.readFile("./pages/login.html", (err, data) => {
    if (err) {
      console.log(err);
      return
    };
    response.send(200, data)
  })
})
app.get("/news", (request, response) => {
  response.send(200, "新闻页面")
})
app.get("/test", (request, response) => {
  let message = " 我是从数据库得到的数据";
  let list = ["太阳照常升起", "阳光灿烂的日子", "让子弹飞", "有话好好说"];
  ejs.renderFile("./pages/test.ejs", { message, list }, (err, data) => {
    response.send(200, data)
  })
})
app.post("/doLogin", (request, response) => {
  response.send(200, request.body)
})
console.log('Server running at http://127.0.0.1:8081/');