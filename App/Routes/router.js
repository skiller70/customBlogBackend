const express = require("express")
const mongoModel = require("../Database/mongooseSchema")
const router = express.Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))  
router.route("/about").get((req, res) => {
    res.send("skillers page");
  });


router.route("/owner").get((req,res)=>{

    res.send("owner is skiller")
})

router.route("/create").post((req,res)=>{
  const {name} = req.body 


  mongoModel.TestBlog.create({name})
    res.send("pro is created")

})

router.route("/read").get(async(req,res)=>{ 
  const user = await mongoModel.TestBlog.find()

  res.send(user)
})


module.exports = router;