require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoModel = require("../Database/mongooseSchema");

module.exports = register = async (req, res) => {
  try {
    const { name, username, email, password, dob } = req.body;

    const oldUser = await mongoModel.USER_DATA.find({ username });

    if (oldUser[0]) {
      return res.status(400).send("user already exist");
    } else {
      const encryptPassword = await bcrypt.hash(password, 10);

      const user = new mongoModel.USER_DATA({
        name,
        username,
        email,
        password: encryptPassword,
        dateOfBirth: dob,
      });

      const data = await user.save();
        
      const token = jwt.sign(
        {
          id: data._id,
          name: data.name,
          username: data.username,
          email: data.email,
        },
        process.env.JWT_TOKEN
      );

      return res.status(201).send(token);
    }
  } catch (error) {
    if (error) {
      res.status(400).send("failed to register");
    }
  }
};
