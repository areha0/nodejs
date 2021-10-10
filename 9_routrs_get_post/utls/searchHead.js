const fs = require("fs");
const path = require("path");

// function getHead(extension) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./utls/mime.json", (err, data) => {

//       if (err) {
//         console.log(err);
//         reject(err)
//         return
//       }
//       // 因为 fs.readfile()是一个异步方法, 所以要返回一个promise
//       let mime = JSON.parse(data.toString());
//       // console.log(mime[extension]);
//       resolve(mime[extension])
//     })
//   })
// }

function getHead(extname) {
  let data = fs.readFileSync("./utls/mime.json");
  let mime = JSON.parse(data.toString());
  // console.log(mime[extension]);
  return mime[extname]
}

// 封装routes
exports.routes = function (request, response, static) {
  let url = new URL(request.url, `http://${request.headers.host}`);
  let pathname = url.pathname;
  pathname = (pathname == "/") ? "/index.html" : pathname;
  let extname = path.extname(pathname);
  if (extname) {
    if (pathname != "/favicon.ico") {

      try {
        let data = fs.readFileSync("./" + static + pathname);
        if (data) {
          let head = getHead(extname);
          response.writeHead(200, { 'content-type': '' + head + '; charset="utf-8"' })
          response.end(data)
        }
      } catch (error) {
      }

    }
  }
}