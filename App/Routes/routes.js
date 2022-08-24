const express = require("express")

const router = express.Router()



router.route("/about").get((req, res) => {
    res.send("skillers page");
  });

router.route("/owner").get((req,res)=>{

    res.send("owner is skiller")
})


module.exports = router;