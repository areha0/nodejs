// 自己手写一个 HTTP 服务器应用
// 1. 引入HTTP模块
const http = require("http");

// 2. 调用createServe方法
http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" })
  res.write("nihaoa, choushabi");

  // 打印一下客户端请求, 请求中的url中包含有客户端传入的信息

  // 如果需要获取url请求体中的内容, 可以引入url模块; 
  // 之前可以使用url模块的parse()方法对请求体进行解析; 但是现在parse()方法被弃用, 需要使用URL类

  if (req.url != "/favicon.ico") {
    // const url1 = new URL("https://127.0.0.1:8081/?name=shuosuo&age=20");
    // 使用URL类对url传入的信息进行解析
    const url = new URL(req.url, `http://${req.headers.host}`)
    console.log(url);
    // 获取请求体中具体的数据, 是使用 url.searchParams.get("")
    console.log(`姓名: ${url.searchParams.get("name")} -- 年龄: ${url.searchParams.get("age")}`);
  }
  // 在客户端上打印信息

  // 结束服务器响应
  res.end("wobuhao,xxxx");
}).listen(8081)

console.log("正在监听8081端口");