// 需求: 由于我们之前实现的是静态页面的监测与显示,
// 现在我们需要实现的是动态页面的显示, 那就需要使用第三方模块 EJS

const fs = require("fs");
var http = require('http');
const path = require("path")
const ejs = require("ejs");

let tools = require("./utls/searchHead");

http.createServer(function (request, response) {
  // 实现静态服务器的封装
  tools.routes(request, response, "static");

  let url = new URL(request.url, `http://${request.headers.host}`)
  let pathname = url.pathname;
  pathname = (pathname == "/") ? "/inde.html" : pathname;
  let extname = path.extname(pathname);

  // 获取数据的请求类型
  console.log(request.method);

  if (!extname) {
    if (pathname == "/login") {
      // 3. 在这里提供一个执行post请求的表单, 解析post数据在 /toLogin中
      fs.readFile("./pages/login.html", (err, data) => {
        if (err) {
          console.log(err);
          return
        };
        response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
        response.end(data)
      })
    } else if (pathname == "/toLogin") {
      // 4. 在这里处理post请求的数据
      let postData = "";
      request.on("data", (chunk) => {
        postData += chunk
      });
      request.on("end", () => {
        if (postData) {
          console.log(postData);
          response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
          response.end(postData)
        } else {
          console.log("没有数据");
        }
      })

    } else if (pathname == "/registor") {
      response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
      response.end("欢迎注册")
    } else if (pathname == "/test") {

      // 1. 在这里测试EJS动态页面, 就是在页面中直接显示从数据库中获取到的数据
      let message = "你好啊, 这里是从数据库拿到的数据";
      let list = ["阳光灿烂的日子", "让子弹飞", "一步之遥", "太阳照常升起"];
      // let list = [{ name: "shuosuo" }, { name: "areha" }];
      ejs.renderFile("./pages/test.ejs", { message, list }, (err, data) => {
        response.writeHead(200, { 'content-type': 'text/html, charset="utf-8"' });
        response.end(data)
      })
    } else if (pathname == "/new") {
      // 2.在这里获取并处理get请求传入的数据
      let data = url.searchParams;
      console.log(data);
      response.writeHead(200, { 'content-type': 'text/html, charset="utf-8"' });
      response.end(data.get("name") + "--" + data.get("age"));

    } else {
      response.writeHead(404, { 'content-type': 'text/html, charset="utf-8"' });
      response.end("404, file not found")
    }
  }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');