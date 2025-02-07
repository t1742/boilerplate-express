let express = require('express');
let app = express();

console.log("1");
console.log(__dirname);
console.log("2");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function(req, res) {
  res.json({
    "message": "Hello json"
  });
});

console.log("3");

module.exports = app;
