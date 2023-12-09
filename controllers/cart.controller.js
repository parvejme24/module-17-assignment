const CartItem = require("../models/cartItem.model");

// Get user's cart by ID
exports.getCartByUserId = async (req, res) => {
  try {
    const cartItems = await CartItem.find({ user: req.params.userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a product to the user's cart
exports.addToCart = async (req, res) => {
  try {
    const newCartItem = new CartItem({
      user: req.params.userId,
      product: req.body.product,
      quantity: req.body.quantity,
    });
    const savedCartItem = await newCartItem.save();
    res.status(201).json(savedCartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a cart item
exports.updateCartItem = async (req, res) => {
  try {
    const updatedCartItem = await CartItem.findByIdAndUpdate(
      req.params.cartItemId,
      req.body,
      { new: true }
    );
    if (!updatedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a cart item
exports.removeCartItem = async (req, res) => {
  try {
    const deletedCartItem = await CartItem.findByIdAndDelete(
      req.params.cartItemId
    );
    if (!deletedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
