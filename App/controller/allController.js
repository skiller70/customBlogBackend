const register =  require("./register") 
const login  = require("./login")
const blogPost = require("./blogPost")
const comments = require("./comments")
const postLike = require("./blogLike")
const getBlogs = require("./getBlogs")
const deletePost = require("./deleteBlog")
const searchUsername = require("./searchUsername")
const control = {
    register,
    login,
    blogPost,
    comments,
    postLike,
    getBlogs,
    deletePost,
    searchUsername


}

module.exports = control;