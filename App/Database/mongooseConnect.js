require("dotenv").config()
const mongoose = require("mongoose")

// const LOCAL_URL = "mongodb://localhost:27017"
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
   ).then((data)=> console.log("connected to the database")).catch((err)=>console.log(err))

