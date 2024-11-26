const bcrypt = require("bcrypt");
const userModel = require("../../models/userModel");
const { genrateToken } = require("../../utils/genrateToken");

module.exports.singin = async (req, res) => {
  // console.log("its working");
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  // console.log(user);
  if (!user) {
    return res
      .status(500)
      .json({ message: "User not found !" });
  }
  try {
    await bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = genrateToken(user);
        res
          .status(200)
          .json({
            message: "Login Successful",
            id: user._id,
            role: user.role,
            token: token,
          });
      } else {
        return res.status(500).json("Invalid email pssword");
      }
    });
  } catch (e) {
    return res.status(400).status({ message: "can't Singin" });
  }
};
