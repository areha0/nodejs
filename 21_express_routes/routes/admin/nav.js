const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("导航页面")
})

route.get("/find", (req, res) => {
  res.send("导航查询")
});

route.get("/add", (req, res) => {
  res.send("添加导航")
});

route.post("/doAdd", (req, res) => {
  res.send("执行添加导航操作")
});

route.get("/edit", (req, res) => {
  res.send("修改导航信息")
});

route.post("doEdit", (req, res) => {
  res.send("执行修改导航信息操作")
})

module.exports = route