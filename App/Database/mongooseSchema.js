const mongoose = require("mongoose");

const testBlog = mongoose.Schema({
  name: String,
});

const TestBlog = mongoose.model("TestBlog", testBlog);

module.exports = {
  TestBlog,
};
