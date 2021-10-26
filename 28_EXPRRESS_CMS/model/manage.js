const mongoose = require("./core");

const ManageSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  mobile: String,
  status: {
    type: Number,
    default: 1
  },
  login_time: Number,
  add_time: Number
}, { versionKey: false });

module.exports = mongoose.model("Manage", ManageSchema, "manage")