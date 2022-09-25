const mongoModel = require("../Database/mongooseSchema");
const cloudinary = require("cloudinary").v2;

module.exports = async (req, res) => {


  try {
    const { title, subject, content, author } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blogPost",
      resource_type: "image",
    },(err,data)=>{if(err)console.log(err)});
   
    const image = result.secure_url;
    const cloudinary_id = result.public_id;
    const category = req.body.category || "";
    const post = await mongoModel.BLOG_POST({
      title,
      subject,
      content,
      author,
      image,
      cloudinary_id,
      category,
    }).populate("author","username");

    const postSave = await post.save();
    return res.status(200).send(postSave);
  } catch (error) {
    if (error) {
      return res.status(500).send("server error");
    }
  }
};
