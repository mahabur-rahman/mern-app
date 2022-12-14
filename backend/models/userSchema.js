const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// userSchema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  messages: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      message: { type: String, required: true },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// hash password before save on db 👍
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }

  next();
});

// JWT TOKEN GENERATE 👍
UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

    this.tokens = this.tokens.concat({ token: token });

    await this.save();

    return token;
  } catch (err) {
    console.log(err);
  }
};

// store message func
UserSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });

    // save
    await this.save();

    return this.messages;
  } catch (err) {
    console.log(err);
  }
};

// model
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
