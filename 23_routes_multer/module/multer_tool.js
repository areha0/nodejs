// 对文件存取功能进行打包
const multer = require("multer");
const path = require('path');
// 为了修改日期的展示形式, 引入第三方模块 silly-datatime
const sd = require("silly-datetime");
// 为了按照日期生成文件夹, 引入第三方模块 mkdirp
const mkdirp = require("mkdirp");

let tool = {
  multer_upload() {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        let today = sd.format(new Date(), 'YYYYMMDD');
        let lib = path.join('static/upload', today);
        // ** mkdirp是一个异步方法,返回一个promise
        mkdirp.sync(lib)
        cb(null, lib);

      },
      filename: function (req, file, cb) {
        const filename = file.originalname;
        cb(null, filename);
      }
    });

    const upload = multer({ storage: storage });
    return upload
  }
}

module.exports = tool
