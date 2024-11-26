module.exports.logout = async (req, res) => {
  let token ="";
  res.status(200).json({ message: "logout Sucess full",token:token });
};
