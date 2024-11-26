const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "Books", 
      required: true,
    },
    status: {
      type: String,
      default: "Order Placed",
      enum: ["Order Placed", "Out for delivery", "Delivered", "Canceled"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema); 