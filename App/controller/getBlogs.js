const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  try {
    const postData = await mongoModel.BLOG_POST.find({}).populate("author","username").sort({_id: -1});
   return res.status(200).send(postData)
  } catch (error) {
    if (error) return res.send("failed to fetch");
  }
};
