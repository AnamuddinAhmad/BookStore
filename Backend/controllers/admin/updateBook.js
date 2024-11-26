const bookModel = require("../../models/bookModel");

module.exports.updateBook = async (req, res) => {
  try {
    const { book_id } = req.headers;
    const { url, title, author, price, desc, language } = req.body;
    const updatedBook = await bookModel.findByIdAndUpdate(
      book_id,
      {
        url: url,
        title: title,
        author: author,
        price: price,
        desc: desc,
        language: language,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Book Updated.", updatedBook: updatedBook });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};
