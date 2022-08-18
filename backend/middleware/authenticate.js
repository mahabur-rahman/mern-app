const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await UserModel.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found!");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    tre;

    next();
  } catch (err) {
    return res.status(401).send(`Unauthorized : no token provided`);
  }
};

module.exports = authenticate;
