const fs = require("fs");
const path = require("path");
const ejs = require("ejs")


function getHead(extname) {
  let data = fs.readFileSync("./utls/mime.json");
  let mime = JSON.parse(data.toString());
  // console.log(mime[extension]);
  return mime[extname]
}

// 将静态服务器以及不同的路径都进行封装到一个对象中
let app = {
  // 1. 静态服务器的封装
  static(request, response, staticpath) {
    let url = new URL(request.url, `http://${request.headers.host}`);
    let pathname = url.pathname;
    pathname = (pathname == "/") ? "/index.html" : pathname;
    let extname = path.extname(pathname);
    if (extname) {
      if (pathname != "/favicon.ico") {
        try {
          let data = fs.readFileSync("./" + staticpath + pathname);
          if (data) {
            let head = getHead(extname);
            response.writeHead(200, { 'content-type': '' + head + '; charset="utf-8"' })
            response.end(data)
          }
        } catch (error) {
        }
      }
    }
  },
  // 2. 不同路径的封装
  login(request, response) {
    fs.readFile("./pages/login.html", (err, data) => {
      if (err) {
        console.log(err);
        return
      };
      response.writeHead(200, { 'content-type': 'text/html; charset="utf-8"' });
      response.end(data)
    })
  },
  toLogin(request, response) {
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
  },
  test(request, response) {
    let message = "你好啊, 这里是从数据库拿到的数据";
    let list = ["阳光灿烂的日子", "让子弹飞", "一步之遥", "太阳照常升起"];
    // let list = [{ name: "shuosuo" }, { name: "areha" }];
    ejs.renderFile("./pages/test.ejs", { message, list }, (err, data) => {
      response.writeHead(200, { 'content-type': 'text/html, charset="utf-8"' });
      response.end(data)
    })
  },
  new(request, response) {
    let url = new URL(request.url, `http://${request.headers.host}`);
    let data = url.searchParams;
    console.log(data);
    response.writeHead(200, { 'content-type': 'text/html, charset="utf-8"' });
    response.end(data.get("name") + "--" + data.get("age"));
  },
  error(request, response) {
    response.writeHead(404, { 'content-type': 'text/html, charset="utf-8"' });
    response.end("404, file not found")
  }
}

module.exports = app;