const userModel = require("../../models/userModel.js");
const bcrypt = require("bcrypt");

const { genrateToken } = require("../../utils/genrateToken.js");

module.exports.register = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    // chekc Username length is 4> or not

    if (username.length < 4) {
      return res
        .status(500)
        .json({ message: "Username length should be grater than 3" });
    }

    //Checking Existing user
    let existingUser = await userModel.findOne({ username: username });
    if (existingUser)
      return res.status(500).json({ message: "User Already exist" });

    //Checkign existing email
    const existingEmail = await userModel.findOne({ email: email });
    if (existingEmail) {
      return res.status(500).json({ message: "Email already exist" });
    }

    //Checking password condition
    if (password.length <= 5) {
      return res
        .status(400)
        .json({ message: "Password should be grater than 3" });
    }

    //Password Encryption.
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hash,
      address: address,
    });

    const token = genrateToken(newUser);
    return res.status(200).json({
      message: "Signup Successfully",
      id: newUser._id,
      role: newUser.role,
      token: token,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal Server error" });
  }
};
