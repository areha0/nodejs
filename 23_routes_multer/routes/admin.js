// 在这里用于管理后台的路由, 
// 注意: 这里所管理的路由都是在admin这个路劲之下的
const express = require("express");
const route = express.Router();
const user = require("./admin/user");
const nav = require("./admin/nav");

route.get("/", (req, res) => {
  res.send("你好啊, 这里是后台管理页面")
});

route.use("/user", user);
route.use("/nav", nav);

module.exports = route;