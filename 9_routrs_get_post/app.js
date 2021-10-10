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
  if (!extname) {
    if (pathname == "/login") {
      response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
      response.end("欢迎登陆")
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
    } else {
      response.writeHead(404, { 'content-type': 'text/html, charset="utf-8"' });
      response.end("404, file not found")
    }
  }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');