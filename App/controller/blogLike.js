const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
    const  { postId, author,remove} = await req.query;
  try {


if(remove === "true"){
    await mongoModel.BLOG_POST.findByIdAndUpdate(
        { _id: postId },    
        { $pull: { "likes" : author  } }
      );
     return res.status(200).send("like remove successfully");

}
else{
    await mongoModel.BLOG_POST.findByIdAndUpdate(
        { _id: postId },
        { $push: { likes: { $each: [author] } } }
      );
     return res.status(200).send("like successful");
    
}


  } catch (error) {
    if (error) {
      return res.status(400).send("failed to like post");
    }
  }
};
