const bookModel = require("../../models/bookModel");

module.exports.deleteBook = async (req, res) => {
  try {
    const { book_id } = req.headers;

    if (!book_id) {
      return res.status(400).json({ message: "Book Id required" });
    }

    const deletedBook = await bookModel.findByIdAndDelete(book_id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found." });
    }

    return res.status(200).json({ message: "Book Deleted successfuly" });
  } catch (err) {
    return res.status(500).json({ message: "Faild to delete." });
  }
};
