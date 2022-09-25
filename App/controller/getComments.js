const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  try {

    const postId = req.query.postId;

    if(postId === ""){
      res.status(200).send([])
    }else{
      const pages = (req.query.pages - 1) * 4


      const comments = await mongoModel.USER_COMMENTS.find({ idOfBlog :postId}).limit(4).skip(pages).populate("author", "username");
     
      return res.status(201).send(comments);  
    }
   
  } catch (error) {
    if (error) res.status(400).send("failed to fetch comments");
  }
};
