const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const token = jwt.sign(req.auth, process.env.JWT_TOKEN);

  res.status(200).send(token);
};
