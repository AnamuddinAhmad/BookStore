const bookModel = require("../../models/bookModel");

module.exports.allBooks = async (req, res) => {
  try {
    let page = parseInt(req.query.page || 1);
    let limit = parseInt(req.query.limit || 10);
    const allBook = await bookModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    if (allBook < 1) {
      return res.status(4001).json({ message: "No Books Found" });
    }

    let totalBook = await bookModel.countDocuments();
    return res.status(200).json({
      allbook: allBook,
      pagination: {
        currentPage: page,
        totalPage: Math.ceil(totalBook / limit),
        totalBook: totalBook,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};
