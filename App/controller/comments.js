
const mongoModel = require("../Database/mongooseSchema")
module.exports = async(req,res)=>{

const {idOfBlog,author,comment} = req.body;
try {

const userComment = new mongoModel.USER_COMMENTS({idOfBlog,author,comment})

const commentSave = await userComment.save()

console.log(commentSave)
res.status(201).send("comment post successfully")
    
} catch (error) {
    if(error){return res.status(400).send("failed to comment")}
}


}