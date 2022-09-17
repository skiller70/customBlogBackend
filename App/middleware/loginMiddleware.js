const mongoModel = require("../Database/mongooseSchema");
const bcrypt = require("bcryptjs");

module.exports = loginAuthentication = async (req, res, next) => {

  try {
    const {password } = req.body;
    const username = req.body.username.toLowerCase()
    const oldAuth = await mongoModel.USER_DATA.find({ username });
   
    if (!oldAuth[0]) {
      return res.status(201).send("invalid username or password");
    }

    if (oldAuth && bcrypt.compareSync(password, oldAuth[0].password)) {
      
      const data = {
        id : oldAuth[0]._id,
        name : oldAuth[0].name,
        username : oldAuth[0].username,
        email :oldAuth[0].email,
        dateOfBirth : oldAuth[0].dateOfBirth
        
      }
    req.auth = data
      next();

      res.end();
    } else {
      return  res.status(201).send("invalid username or password");
    }
  } catch (error) {
    if (error) {
      return res.status(500).send("server error failed to login");
    }
  }
};
