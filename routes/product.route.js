const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");

// Define product routes
router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);

module.exports = router;
