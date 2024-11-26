const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).json({ message: "Atuhentication token required." });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token expired please login again." });
    }
    req.user = user;
    next();
  });
};
