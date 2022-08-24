const http = require("http");
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello");
});


server.listen(port, () => {
  console.log(`server is running on this ${port}!!`);
});
