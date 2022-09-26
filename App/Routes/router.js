const express = require("express");

const middleware = require("../middleware/middlewares");

const router = express.Router();
const bodyParser = require("body-parser");
const control = require("../controller/allController");
const cors = require("cors");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  cors({
    origin: [
      "https://main--remarkable-macaron-2714af.netlify.app",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    origin: true,
  })
);
router.route("/getBlogs").get(control.getBlogs);
router.route("/postLike").get(control.postLike);
router.route("/comments").post(control.comments);
router.route("/register").post(control.register);
router.route("/login").post(middleware.login, control.login);
router
  .route("/blogPost")
  .post(middleware.upload.blogPosts.single("blogPost"), control.blogPost);
router
  .route("/updateBlog")
  .put(middleware.upload.blogPosts.single("blogPost"), control.updateBlog);
router.route("/searchUsername:username").get(control.searchUsername);
router.route("/getComment").get(control.getComment);
router.route("/deletePost:id").delete(control.deletePost);

module.exports = router;
