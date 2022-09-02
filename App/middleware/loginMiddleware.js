const mongoModel = require("../Database/mongooseSchema");
const bcrypt = require("bcryptjs");

module.exports = loginAuthentication = async (req, res, next) => {
  console.log(req.body)
  try {
    const { username, password } = req.body;

    const oldAuth = await mongoModel.USER_DATA.find({ username });
   
    if (!oldAuth[0]) {
      return res.status(400).send("invalid username ");
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
      return setTimeout(()=>{ res.status(400).send("incorrect password");},3000)
    }
  } catch (error) {
    if (error) {
      return res.status(400).send("failed to login");
    }
  }
};
