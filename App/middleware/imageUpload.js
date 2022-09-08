require("dotenv").config();
const multer = require("multer");

const storage = multer.diskStorage({});

const blogPosts = multer({
  storage,
});

module.exports = { blogPosts };
