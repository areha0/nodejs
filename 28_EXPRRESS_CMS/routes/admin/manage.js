const express = require("express");
const router = express.Router();

const ManageModel = require("../../model/manage");


router.get("/", (req, res) => {
  ManageModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    console.log(result);
  })
  res.send("这是管理员页面")
});


router.get("/add", (req, res) => {
  let newOne = new ManageModel({
    username: "areha",
    password: "123546",
    email: "2420256810@qq.com",
    mobile: "15938842743",
  });

  newOne.save((err, result) => {
    if (err) {
      console.log(err);
      return
    };
    // console.log(result);
    console.log("添加成功");
  });

  res.send("添加管理员")
})


module.exports = router