const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// userSchema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
});

// hash password before save on db 👍
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
});

// model
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
