const cloudinary = require("cloudinary").v2;
const mongoModel = require("../Database/mongooseSchema");
module.exports = async (req, res) => {
    const {title,subject,content} = req.body;
  try {
    const getBlog = await mongoModel.BLOG_POST.findById({
      _id: req.body.postId,
    });

    await cloudinary.uploader.destroy(
      getBlog.cloudinary_id,
      (option = { invalidate: true })
    );

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blogPost",
      resource_type: "image",
    });

    const updateBlog = await mongoModel.BLOG_POST.findByIdAndUpdate(
      { _id: req.body.postId },
      { cloudinary_id: result.public_id, image: result.secure_url,title,subject,content }
    );

    return res.status(201).send(updateBlog);
  } catch (error) {
    if (error) res.status(400).send("server error");
  }
};
