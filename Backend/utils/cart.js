const userModel = require("../models/userModel");
const bookModel = require("../models/bookModel");

module.exports.cart= async (req,res)=>{
    return res.status(200).json({message:"Everything is ok"});
}