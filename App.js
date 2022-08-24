const http = require("http");
const express = require("express");
const PORT = process.env;
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello");
});

server.listen(PORT, () => {
  console.log(`server is running on this ${PORT}`);
});
