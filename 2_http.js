// 插件自带的HTTP模块体
// 1. 引入http木块
var http = require('http');
// 2. 使用createServe()方法, 该方法内部传入的是一个回调函数
// 3. 回调函数中有两个参数, require: 获取客户端传入的信息; response: 服务器向客户端做出响应
http.createServer(function (request, response) {
  // 4. 设置内容类型
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // 5. 结束服务器
  response.end('Hello World');
  // 6. 监听端口
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');