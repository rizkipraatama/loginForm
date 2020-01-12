const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);
app.use(cors);
console.log("server started");
