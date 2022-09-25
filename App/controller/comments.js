
const mongoModel = require("../Database/mongooseSchema")
module.exports = async(req,res)=>{

const {idOfBlog,author,comment} = req.body;

try {

const userComment = new mongoModel.USER_COMMENTS({idOfBlog,author,comment})

await mongoModel.BLOG_POST.updateOne({_id :idOfBlog },{$push : {comments : {$each : [userComment._id]}}})

const updatedData = await userComment.save()


res.status(201).send(updatedData)
    
} catch (error) {
    if(error){return res.status(400).send("failed to comment")}
}


}