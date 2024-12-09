const userModel = require("../models/userModel");
const mongoose = require("mongoose");

module.exports.removeToCart = async (req, res) => {
  try {
    let { book_id } = req.headers;
    let { id } = req.user;

    if (!mongoose.Types.ObjectId.isValid(book_id)) {
      return res.status(404).json({ message: "Invalid Book Id" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Invalid user Id" });
    }

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    let idx = user.cart.indexOf(book_id);
    if(idx==-1){
        return res.status(400).json({message:"Book not found in cart"});
    }
    user.cart.splice(idx, 1);
    await user.save();

    return res.status(200).json({ message: "removed successfully" });
  } catch (err) {
    return res.status(500).json({message:"Unable to removed Item"});
  }
};
