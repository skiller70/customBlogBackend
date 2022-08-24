const mongoose = require("mongoose")

const LOCAL_URL = "mongodb://localhost:27017"
const URL = "mongodb+srv://skiller007:iePhnsJRts0QgrIP@cluster0.jsjeb.mongodb.net/customBlog?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
   ).then((data)=> console.log("connected to the database")).catch((err)=>console.log(err))

