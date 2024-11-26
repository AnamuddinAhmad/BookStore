const bookModel = require("../../models/bookModel");
const userModel = require("../../models/userModel");

module.exports.addBook = async (req, res) => {
  try {
    const { id } = req.headers;

    const user = await userModel.findById(id);

    if (user.role !== "admin") {
      return res.status(400).json({ message: "Unauthorised access." });
    }
    
    const { url, title, author, price, desc, language } = req.body;
    //Check for duplicate book
    const existTitle = await bookModel.findOne({title:title});
    const existAuthor = await bookModel.findOne({author:author});
    if(existTitle && existAuthor){
      return res.status(401).json({message:"Book Exist"});
      
    }
    const book = await bookModel.create({
      url: url,
      title: title,
      author: author,
      price: price,
      desc: desc,
      language: language,
    });

    return res.status(200).json({ message: "Book added Succesfuly", book });
  } catch (err) {
    return res.status(500).json({ message: "Faild to create." });
  }
};
