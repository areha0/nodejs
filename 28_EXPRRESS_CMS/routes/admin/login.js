const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/login/login")
})

module.exports = router