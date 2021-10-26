// 这里是api管理的路由
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("这是api管理页面")
});


module.exports = router