const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("你好, 这里是接口")
})

module.exports = route