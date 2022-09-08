const cloudinary = require("cloudinary").v2
const mongoModel= require("../Database/mongooseSchema")


module.exports = async(req,res)=>{
try {
    const post = await mongoModel.BLOG_POST.findById(req.params.id)
  
    await cloudinary.uploader.destroy(post.cloudinary_id)
    post.remove()
    return res.send(post)
   
} catch (error) {
    if(error) res.status(500).send("failed to delete post")
}

res.send("delete successfully")


}