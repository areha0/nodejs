const fs = require("fs")

exports.getHead = function (extension) {
  // switch (extension) {
  //   case ".html":
  //     return "text/html"
  //   case ".js":
  //     return "text/javascript"
  //   case ".css":
  //     return "text/css"
  //   default:
  //     return "text/html"
  // }
  return new Promise((resolve, reject) => {
    fs.readFile("./utls/mime.json", (err, data) => {

      if (err) {
        console.log(err);
        reject(err)
        return
      }
      // 因为 fs.readfile()是一个异步方法, 所以要返回一个promise
      let mime = JSON.parse(data.toString());
      // console.log(mime[extension]);
      resolve(mime[extension])
    })
  })
}