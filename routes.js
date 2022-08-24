const express = require("express")

const route = express.Router()



route("/about").get((req, res) => {
    res.send("skillers page");
  });

route("/owner").get((req,res)=>{

    res.send("owner is skiller")
})


module.exports = route;