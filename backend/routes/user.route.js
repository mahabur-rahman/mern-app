const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const {
  userRegister,
  userLogin,
  userAbout,
} = require("../controllers/user.controller");

// POST | REGISTER
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/about", authenticate, userAbout);

// export
module.exports = router;
