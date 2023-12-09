const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");

// Define order routes
router.get("/:userId", OrderController.getOrdersByUserId);
router.post("/:userId/place-order", OrderController.placeOrder);
router.get("/:orderId", OrderController.getOrderById);
router.put("/:orderId/update-status", OrderController.updateOrderStatus);

module.exports = router;
