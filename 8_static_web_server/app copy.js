// 创建一个本地的静态服务器, 浏览器中的url判断浏览器需要的文件
// 将需要的文件展示到浏览器页面中


const http = require('http');
const fs = require("fs");
const path = require('path');

let tools = require("./utls/searchHead");
let static = "./static";


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
  // 1. 获取浏览器客户端传入的url: req.url
  let url = new URL(req.url, `http://${req.headers.host}`);
  // console.log(url);
  let pathname = url.pathname;

  // 4. 在初始时刻只有域名时, 需要自动将路径指向index.html
  pathname = (pathname == "/") ? "/index.html" : pathname;
  // console.log(pathname);
  let extname = path.extname(pathname);

  // 2. 根据url判断static文件夹中是否存在对应的文件, 如果不存在返回404, 如果存在, 返回对应的文件
  if (pathname != "/favicon.ico") {
    fs.readFile(static + pathname, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("404, 您访问的页面不存在");
        return
      };
      // 3. 现在存在一个问题: 就是我们的数据类型定死了是html, 所以只会显示出页面的骨架, 我们需要做的是根据不同的后缀名规定不同的响应头

      let head = tools.getHead(extname);
      res.writeHead(200, { 'Content-Type': '' + head + '; charset="utf-8"' });
      res.end(data)
    })
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');