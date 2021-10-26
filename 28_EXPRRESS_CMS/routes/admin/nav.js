const express = require("express");
const router = express.Router();

const NavModel = require("../../model/nav");


router.get("/", (req, res) => {
  NavModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    console.log(result);
  })
  res.send("这是导航页面")
});


router.get("/add", (req, res) => {
  let newOne = new NavModel({
    title: "百度一下",
    url: "http:www.baidu.com"
  });

  newOne.save((err, result) => {
    if (err) {
      console.log(err);
      return
    };
    // console.log(result);
    console.log("添加导航成功");
  });

  res.send("添加导航")
})


module.exports = router