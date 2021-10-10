// 需求: 将静态服务器的代码封装到routes中, 并对实现对路由进行监测与响应

const fs = require("fs");
var http = require('http');

let tools = require("./utls/searchHead");

http.createServer(function (request, response) {
  // 实现静态服务器的封装
  tools.routes(request, response, "static");
  // 根据url的路由,返回正确的数据
  // 由于静态服务器是判断自己的文件中是否含有路径中的文件, 所以对于路由的话, 会返回404
  // 所以我们要首先判断是否包含该文件, 再判断是否有路由, 最后判断是否出错
  // 所以将读取文件改为同步函数
  let url = new URL(request.url, `http://${request.headers.host}`)
  let pathname = url.pathname;
  if (pathname == "/login") {
    response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
    response.end("欢迎登陆")
  } else if (pathname == "/registor") {
    response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
    response.end("欢迎注册")
  } else {
    response.writeHead(404, { 'content-type': 'text/html; charset="utf-8"' });
    // response.end("404, 你访问的页面不存在")
  }


}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');