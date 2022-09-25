const register =  require("./register") 
const login  = require("./login")
const blogPost = require("./blogPost")
const comments = require("./comments")
const postLike = require("./blogLike")
const getBlogs = require("./getBlogs")
const deletePost = require("./deleteBlog")
const searchUsername = require("./searchUsername")
const getComment = require("./getComments")
const updateBlog = require("./updateBlog")
const control = {
    register,
    login,
    blogPost,
    comments,
    postLike,
    getBlogs,
    deletePost,
    searchUsername,
    getComment,
    updateBlog


}

module.exports = control;