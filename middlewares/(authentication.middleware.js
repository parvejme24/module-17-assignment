const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Middleware for authenticating user
exports.authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key"); // Replace 'your-secret-key' with your actual secret key
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Invalid token. User not found." });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};



