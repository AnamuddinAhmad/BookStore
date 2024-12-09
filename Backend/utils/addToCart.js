const userModel = require("../models/userModel");
const mongoose = require("mongoose");

module.exports.addToCart = async (req, res) => {
  try {
    let { book_id } = req.headers;
    let { id } = req.user;

    if (!mongoose.Types.ObjectId.isValid(book_id)) {
      return res.status(400).json({ message: "Invalid Book Id" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Invalid User Id" });
    }

    const user = await userModel.findById(id).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const existBook =  user.cart.includes(book_id);

    if (existBook) {
      return res.status(201).json({ message: "Book Already exist" });
    }

    user.cart.push(book_id);
    await user.save();

    // console.log(id, book_id, user);
    return res.status(200).json({ message: "Product added Sucessfuly" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to Add to cart." });
  }
};
