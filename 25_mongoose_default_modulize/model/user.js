const mongoose = require("./db")
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  }
}, { versionKey: false });


module.exports = mongoose.model("User", UserSchema, "user");