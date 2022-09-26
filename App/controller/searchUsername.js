const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  try {
    const user = await mongoModel.USER_DATA.find({
      username: req.params.username,
    });
  
  if(user[0]){
  return res.status(201).send(true)
  }else{

   return res.status(201).send(false)
  }
   
    
  } catch (error) {
    if(error) return res.status(500).send("server error")
  }

};
