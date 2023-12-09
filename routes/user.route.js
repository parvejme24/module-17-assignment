const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// Define user routes
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/:userId", UserController.getUserById);
router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteUser);

module.exports = router;
