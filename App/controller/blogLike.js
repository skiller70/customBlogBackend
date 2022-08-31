const mongoModel = require("../Database/mongooseSchema")

module.exports = async(req,res)=>{
   

try {
    const {blogId,author} = req.query;
    await mongoModel.BLOG_POST.updateOne({_id :blogId},{$push : { likes : {$each : [author]}}})
    res.status(201).send("like successful")
} catch (error) {
    
    if(error){return res.status(400).send("failed to like post")}
}

}