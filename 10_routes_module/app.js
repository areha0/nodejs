// 将构建的服务器进行封装

const fs = require("fs");
var http = require('http');
const path = require("path")
const ejs = require("ejs");

let app = require("./utls/searchHead");
// console.log(app);
http.createServer(function (request, response) {
  // 实现静态服务器的封装
  app.static(request, response, "static");

  let url = new URL(request.url, `http://${request.headers.host}`)
  let pathname = url.pathname;
  pathname = (pathname == "/") ? "/inde.html" : pathname;
  let extname = path.extname(pathname);
  pathname = pathname.replace("/", "")

  if (!extname) {
    try {
      app[pathname](request, response);
    } catch (error) {
      app["error"](request, response);
    }
  }


}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');