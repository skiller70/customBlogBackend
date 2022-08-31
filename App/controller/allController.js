const register =  require("./register") 
const login  = require("./login")
const blogPost = require("./blogPost")
const comments = require("./comments")
const postLike = require("./blogLike")
const control = {
    register,
    login,
    blogPost,
    comments,
    postLike


}

module.exports = control;