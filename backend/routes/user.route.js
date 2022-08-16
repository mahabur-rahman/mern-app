const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/user.controller");

// POST | REGISTER
router.post("/register", userRegister);
router.post("/login", userLogin);

// export
module.exports = router;
