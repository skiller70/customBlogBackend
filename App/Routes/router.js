const express = require("express");
const mongoModel = require("../Database/mongooseSchema");
const middleware = require("../middleware/middlewares")
const router = express.Router();
const bodyParser = require("body-parser");
const control = require("../controller/allController")
const cors = require("cors");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

router.route("/about").get((req, res) => {
  res.send("skillers page");
});

router.route("/owner").get((req, res) => {
setTimeout(()=>{
  res.send("owner is skiller");
},2000)
  
});

router.route("/create").post((req, res) => {
  const { name } = req.body;

  mongoModel.TestBlog.create({ name });
  res.send("pro is created");
}); 

router.route("/pages").get(async (req, res) => {
  try {
   const result=await mongoModel.TestBlog.countDocuments({})
  const pages = Math.ceil((result / 3))
  
  res.status(201).json({
    pages
  })
  } catch (error) {
    if(error) res.send("something went wrong")
  }
 
 

 });




router.route("/read").get(async (req, res) => {
 const _limit = req.query._limit
 const page = (req.query.page - 1) * _limit
 const user = await mongoModel.TestBlog.find().sort({_id:1}).skip(page).limit(_limit);

  setTimeout(()=>{res.send(user);},1000)
});















router.route("/testBlog").get(async(req,res)=>{
const post = await mongoModel.BLOG_POST.findById({_id:"630f0a29aabcf812894ae3f6"}).populate("author" ,"username email name ")

console.log(post)
res.send(post)
})

router.route("/postLike").get(control.postLike)
router.route("/comments").post(control.comments)
router.route("/register").post(control.register)
router.route("/login").post(middleware.login,control.login)
router.route("/blogPost").post(middleware.upload.single("blogPost"),control.blogPost)

module.exports = router;
