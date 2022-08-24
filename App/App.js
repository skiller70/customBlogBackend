const port = process.env.PORT || 4000;
const http = require("http");
const express = require("express");
const app = express();
const router = require("./Routes/router")
const server = http.createServer(app);
require("./Database/mongooseConnect")

app.use("/blog",router)

app.get("/", (req, res) => {
  res.send("hello");
});

  


server.listen(port, () => {
  console.log(`server is running on this ${port}!!`);
});
