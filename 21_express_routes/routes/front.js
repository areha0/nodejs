const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("你好, 这里是前台")
});

route.get("/login", (req, res) => {
  res.render("login", {})
});

route.post("/doLogin", (req, res) => {
  // console.log(req);
  let body = req.body;
  console.log(body);
  res.send("名字-" + body.name + ", 年龄-" + body.age);
  // res.send("nihaoa")
})

module.exports = route