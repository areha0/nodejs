const mongoose = require("./core");

const NavSchema = mongoose.Schema({
  title: String,
  url: String,
  status: {
    type: Number,
    default: 1
  },
  add_time: Number
}, { versionKey: false });

module.exports = mongoose.model("Nav", NavSchema, "nav")