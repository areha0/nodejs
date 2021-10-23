const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("用户页面")
});
route.get("/find", (req, res) => {
  res.send("用户查询")
});

route.get("/add", (req, res) => {
  res.send("添加用户")
});

route.post("/doAdd", (req, res) => {
  res.send("执行添加用户操作")
});

route.get("/edit", (req, res) => {
  res.send("修改用户信息")
});

route.post("doEdit", (req, res) => {
  res.send("执行修改用户信息操作")
})

module.exports = route