const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  const limit = req.query.limit;
  const page = (req.query.page - 1) * limit;
  try {
    const allDataLength = await mongoModel.BLOG_POST.find({});
    const lastPage = Math.ceil(allDataLength.length / 3);
    const postData = await mongoModel.BLOG_POST.find({})
      .limit(limit)
      .skip(page)
      .populate("author", "username")
      .sort({ _id: -1 });

    return res.status(200).json({ data: postData, lastPage });
  } catch (error) {
    if (error) return res.send("failed to fetch");
  }
};
