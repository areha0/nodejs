const fs = require("fs");
const path = require("path")


let changeView = (response) => {
  response.send = (status, data) => {
    response.writeHead(status, { 'Content-Type': 'text/html;charset="utf-8"' });
    response.end(data);
  }
};

let getHead = (extname) => {
  let data = fs.readFileSync("./utls/mime.json");
  let mime = JSON.parse(data.toString());
  // console.log(mime[extension]);
  return mime[extname]
};

let static = (request, response, staticpath) => {
  let url = new URL(request.url, `http://${request.headers.host}`);
  let pathname = url.pathname;
  let extname = path.extname(pathname);
  if (extname) {
    try {
      // console.log(pathname);
      let data = fs.readFileSync("./" + pathname);
      if (data) {
        let head = getHead(extname);
        response.writeHead(200, { 'content-type': '' + head + '; charset="utf-8"' })
        response.end(data)
      }
    } catch (error) {
      console.log(error);
    }
  }
}

let server = function () {
  // 3.定义一个全局对象, 用于存储app中的方法
  let G = {};
  // ** 将post方法和get方法分开
  G._get = {};
  G._post = {};
  // *** 给express添加静态web服务
  G.staticPath = "static";

  // ***

  // 1. 首先是定义一个函数对象  app--用于执行方法, 当然, APP方法中可以传入形参 request, response
  // 当然了, request和response只有在进行网络请求时才有意义

  let app = function (request, response) {
    changeView(response);
    static(request, response, G.staticPath);
    let url = new URL(request.url, `http://${request.headers.host}`);
    let pathname = url.pathname;
    let method = request.method.toLowerCase();
    let extname = path.extname(pathname);
    if (!extname) {
      // console.log(method);
      // console.log(G._post);
      if (G["_" + method][pathname]) {
        if (method == "get") {
          G._get[pathname](request, response);
        } else {
          let postData = "";
          request.on("data", (chunk) => {
            postData += chunk
          });
          request.on("end", () => {
            request.body = postData;
            console.log(request.body);
            G._post[pathname](request, response)
          })
        }
      } else {
        response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
        response.end("error");
      }
    }

  };

  // 2. 为函数对象定义一个方法  get--用于注册方法
  app.get = function (str, callback) {
    G._get[str] = callback;
  };

  // 6. 为函数定义一个 注册post请求方法
  app.post = function (str, callback) {
    G._post[str] = callback;
  };

  // 7. 注册静态路径
  app.static = function (path) {
    G.staticPath = path
  }

  // 5. 封装一个send方法
  // app.send = function (data, response) {
  //   response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
  //   response.end(data);
  // }

  return app
}




// 4. 导出对象
module.exports = server();