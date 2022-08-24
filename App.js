const http = require("http");
const express = require("express");
const PORT = 4000 || process.env;
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello");
});

server.listen(PORT, () => {
  console.log(`server is running on this ${PORT}`);
});
