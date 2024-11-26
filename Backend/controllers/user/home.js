const userModel = require("../../models/userModel");

module.exports.home = async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await userModel.findById(id).select("-password");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error home pe" });
  }
};
