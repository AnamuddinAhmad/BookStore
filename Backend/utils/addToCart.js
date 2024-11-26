const userModel = require("../models/userModel");

module.exports.addToCart = async (req, res) => {
  try {
    let { book_id } = req.headers;
    let { user } = req;
    let book = await userModel.find();
    console.log(user,book_id);
    
  } catch (err) {
    return res.status(500).json({ message: "Unable to Add to cart." });
  }
};
