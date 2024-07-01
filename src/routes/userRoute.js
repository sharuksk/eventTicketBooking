// routes/userRoutes.js
const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

// Create a new user
router.route("/user").post(userController.createUser);

// login a user
router.route("/login").post(userController.loginUser);

module.exports = router;
