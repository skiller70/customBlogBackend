const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  
  try {
    const image = await req.file.path;
    const { title, subject, content, author } = req.body;

    const post = await mongoModel.BLOG_POST({
      title,
      subject,
      content,
      author,
      image,
    });

    const postSave = await post.save();
    console.log(postSave)
    res.send("blog post success");
  } catch (error) {
    if (error) {
      return res.status(400).send("failed to post ");
    }
  }
};
