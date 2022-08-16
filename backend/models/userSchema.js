const mongoose = require("mongoose");

// userSchema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
});

// model
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
