const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");

// Define cart routes
router.get("/:userId", CartController.getCartByUserId);
router.post("/:userId/add", CartController.addToCart);
router.put("/:userId/update/:cartItemId", CartController.updateCartItem);
router.delete("/:userId/remove/:cartItemId", CartController.removeCartItem);

module.exports = router;
