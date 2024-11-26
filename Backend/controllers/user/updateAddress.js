const UserModel = require("../../models/userModel");

module.exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;

    if (!id || !address) {
      return res.status(400).json({ message: "Id and address are required." });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { address: address },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res
      .status(200)
      .json({ message: "Updated Successful", updatedUser: updatedUser });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};
