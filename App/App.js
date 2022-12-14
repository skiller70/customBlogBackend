const port = process.env.PORT || 4000;
const http = require("http");
const express = require("express");
const app = express();
const router = require("./Routes/router");
const server = http.createServer(app);
require("./middleware/cloudinaryConfig")
require("./Database/mongooseConnect");

app.use("/blog", router);

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/test", (req, res) => {
  res.send("testing is ok");
});
  
  
server.listen(port, () => {
  console.log(`server is running on this ${port}!!`);
});
