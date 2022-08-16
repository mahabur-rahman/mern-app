const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/user.controller");

// POST | REGISTER
router.post("/register", userRegister);

// export
module.exports = router;
