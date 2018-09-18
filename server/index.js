var express = require("express");
var app = express();

app.use("/:id", express.static(__dirname + "/../client/dist"));

let port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
