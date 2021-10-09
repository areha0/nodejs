// 创建一个本地的静态服务器, 浏览器中的url判断浏览器需要的文件
// 将需要的文件展示到浏览器页面中

// 现在从头再完成以下静态服务器


const fs = require("fs");
const path = require("path");
const tool = require("./utls/searchHead")
// let head = "";
var http = require('http');
http.createServer(function (request, response) {
  let static = "./static";
  // 为什么要使用URL类, 因为路径之后可能会跟有其他数据, 所以我们只需要路径
  let url = new URL(request.url, `http://${request.headers.host}`);
  let pathname = url.pathname;
  pathname = (pathname == "/") ? "/index.html" : pathname;


  // console.log(pathname);
  if (pathname != "/favicon.ico") {
    fs.readFile(static + pathname, async (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(404, { 'content-type': 'text/html; charset="utf-8"' })
        response.end("404, 未找到该文件")
        return
      };

      let extname = path.extname(pathname);
      let head = await tool.getHead(extname);
      // tool.getHead(extname).then(data => { head = data });
      // console.log(head);
      response.writeHead(200, { 'content-type': '' + head + '; charset="utf-8"' })

      response.end(data)
    })
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');