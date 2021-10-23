// 首先是安装cookie解析模块
// npm install cookie-parser --save

const express = require("express");
const cookieParser = require("cookie-parser")

const app = express();
// cookie-parser其实是一个第三方模块,需要使用中间件进行引入
app.use(cookieParser("shuosuo"));


// 3. 着重演示一下res.cookie()中的第三个参数: 配置项
// maxAge: cookie的存活时间, 单位为毫秒
// signed: 对cookie进行加密, 但是需要在使用中间件注册是添加密钥(自己设置), 调用是使用 req.signedCookies , 修改时会返回false
// expires: 也是声明cookie的存活时间, 只不过是指明最后的日期
// httpOnly: 设置为true时表示该cookie只能在后端中显示, 前端中不显示
// path: 设置后, cookie只对设置的路径有效, 对其他路径无效
// domain: 设置cookie的有效域, 可以实现跨域(单只限于二级域名),如 aaa.itying.com和 bbb.itying.com; 在设置时 domain:".itying.com"
// secure: 表示使用安全的http协议, 只会https的网站有效
// 

// **  1. 设置cookie使用res.cookie
app.get("/", (req, res) => {
  res.cookie("name", "shuosuo", { maxAge: 1000 * 60 * 60, signed: true });
  res.send("这是首页")
})


// 2. ** 接收cookie使用req.cookie
app.get("/user", (req, res) => {
  let name = req.cookies.name;
  res.send("用户名--" + name)
})

// 4. 使用加密的cookie
app.get("/account", (req, res) => {
  let name = req.signedCookies.name;
  res.send("用户名--" + name)
})

app.listen(8081);
console.log("http://127.0.0.1:8081");
