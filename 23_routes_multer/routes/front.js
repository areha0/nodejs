// 在这里演示文件的上传以及存取
// 1. 安装multer插件 npm install multer --save
const express = require("express");
const route = express.Router();
// 2. 引入插件
// const multer = require("multer");
// // 3.指定文件的存取位置, 文件必须存在
// // const upload = multer({ dest: "static/upload" });

// // 5. 这里可以修改文件名以及加上后缀名
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'static/upload')
//   },
//   filename: function (req, file, cb) {
//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     // cb(null, file.fieldname + '-' + uniqueSuffix)
//     const filename = file.originalname;

//     // cb(err, filename)
//     cb(null, filename);
//   }
// })

// const upload = multer({ storage: storage })

// 7. 接下来将所有需要的代码进行打包, 模块化
const tool = require("../module/multer_tool")

// 8. 将文件按照上传的日期进行分类存储, 具体实现在tool的模块化文件中



route.get("/", (req, res) => {
  res.send("你好, 这里是前台")
});

route.get("/login", (req, res) => {
  res.render("login", {})
});

// 4. 声明文件的name属性, 和form表单中的文件name属性保持一致
// 注意: ** 存取的文件并没有携带后缀名, 我们需要手动加上后缀名, 并且可以修改存取文件的名字
// route.post("/doLogin", upload.single("pic"), (req, res) => {
// route.post("/doLogin", tool.multer_upload().single("pic"), (req, res) => {

// 9. 传入多个文件(多个文件的name属性相同)
// route.post("/doLogin", tool.multer_upload().array('pic', 2), (req, res) => {
// 10. 传入多个文件(多个文件name属性不相同)
const cpUpload = tool.multer_upload().fields([{ name: 'pic1', maxCount: 1 }, { name: 'pic2', maxCount: 1 }])
route.post('/doLogin', cpUpload, function (req, res, next) {
  let body = req.body;
  // let file = req.file;
  let files = req.files;
  res.send({
    body,
    files
  });
})

module.exports = route