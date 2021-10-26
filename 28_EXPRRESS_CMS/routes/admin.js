// 这里是后台管理的路由
const express = require("express");
const router = express.Router();

const manage = require("./admin/manage");
const nav = require("./admin/nav");
const login = require("./admin/login");

router.get("/", (req, res) => {
  res.send("这是后台管理页面")
});

router.use("/manage", manage);
router.use("/nav", nav);
router.use("/login", login);


module.exports = router