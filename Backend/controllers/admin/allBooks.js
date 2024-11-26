const bookModel = require("../../models/bookModel");

module.exports.allBooks = async (req, res) => {
  try {
    const allBook = await bookModel.find();
    return res.status(200).json(allBook);
  } catch (err) {
    return res.status(500).json({message:"Internal Server error"});
  }
};
