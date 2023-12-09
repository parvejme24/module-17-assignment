const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Import the middleware
const authenticationMiddleware = require("../middlewares/authentication.middleware");

// Apply the middleware to a specific route
router.get(
  "/secure-route",
  authenticationMiddleware.authenticateUser,
  (req, res) => {
    // Access the authenticated user through req.user
    res.json({ message: "Access granted. User ID: " + req.user._id });
  }
);

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose
  .connect("your-mongodb-uri", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes (replace these with your actual routes)
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/cart", require("./routes/cart.routes"));
app.use("/api/orders", require("./routes/order.routes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
