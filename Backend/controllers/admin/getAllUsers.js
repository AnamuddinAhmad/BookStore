const userModel = require("../../models/userModel");

module.exports.getUsers = async (req, res) => {
  try {
    //Perfoming Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    //Findig total user and ignoring password field.
    //And skip work which post is alrady fetched and then next time it will ignore them and limit find document only till limit.
    
    let users = await userModel
      .find()
      .select("-password")
      .skip((page - 1) * limit)
      .limit(limit);

    //if no user will be there.
    if (users.length < 1) {
      return res.status(200).json({ message: "No user found" });
    }

    //Fetchig total document in models.
    const totalUser = await userModel.countDocuments();

    return res.status(200).json({
      users: users,
      pagination: {
        currentPage: page,
        totalPage: Math.ceil(totalUser / limit),
        totalUser,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error." });
  }
};
