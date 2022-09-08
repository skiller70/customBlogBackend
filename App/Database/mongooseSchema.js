const mongoose = require("mongoose");

const testBlog = mongoose.Schema({
  name: String,
});


const register = mongoose.Schema({
  name : {type : String},
  username : {type : String},
  email : {type : String},
  password : {type : String},
  dateOfBirth : {type : String},
  
})

const Blogs = mongoose.Schema({
  author : {type:mongoose.Schema.Types.ObjectId ,ref:"USER_DATA"},
  title : {type : String},
  subject : {type : String},
  content : {type : String},
  cloudinary_id : {type : String},
  category : {type : String},
  date : {type : Date,default: Date.now},
  image : {type : String},
  likes : [{type:mongoose.Schema.Types.ObjectId ,ref:"USER_DATA"}],
  comments : [{type:mongoose.Schema.Types.ObjectId ,ref:"USER_DATA"}]
 

})
const Comments = mongoose.Schema({
  author : [{type:mongoose.Schema.Types.ObjectId ,ref:"USER_DATA"}],
  comment : {type : String},
  date : {type : Date,default: Date.now},
  idOfBlog : {type:mongoose.Schema.Types.ObjectId ,ref:"BLOG_POST"}
})




























//*************************************************************************************************
const TestBlog = mongoose.model("TestBlog", testBlog);
const USER_DATA = mongoose.model("USER_DATA",register)
const BLOG_POST = mongoose.model("BLOG_POST",Blogs)
const USER_COMMENTS = mongoose.model("USER_COMMENTS",Comments)
module.exports = {
  TestBlog,
  USER_DATA,
  BLOG_POST,
  USER_COMMENTS

};
