## HTTP
1. hyper text transfer protocol -- 超文本传输协议
2. 所有的 www 文件都必须遵守这个协议**服务端向浏览器传输超文本**, http协议是基于TCP/IP通信协议来传输数据
3. HTTP工作原理 -- 浏览器(HTTP客户端) -通过URL- WEB服务器(HTTP服务器) -发送请求
4. 注意URL类的使用 let url = new URL("req.url", `http://${req.headers.host}`)
