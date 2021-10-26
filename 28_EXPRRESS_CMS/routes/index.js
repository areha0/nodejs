// 这里是前台用户的路由
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("这是前台页面")
});


module.exports = router