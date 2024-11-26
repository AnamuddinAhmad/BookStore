const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address:{
      type:String,
      required:true,
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/1wI8vt4wRQ83GoG8uFTP4TXIY5pK0KFDo9JUB8x8PDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNjc5NC8xNjc5/NDA0My5wbmc_c2Vt/dD1haXNfaHlicmlk",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favourites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book", 
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Books", 
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order", // Ensure it matches the Order model name
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema); // Use a capitalized, singular model name
