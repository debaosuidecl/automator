const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../model/User");

/**
 * @method - POST
 * @description - Create User Macro
 * @param - /macro/create
 */

router.get("/create", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    // const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
