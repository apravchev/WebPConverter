var express = require("express");
var app = express();
app.use(express.static("WebpConverter"));
app.get("/", (req, res, next) => {
  res.redirect("/");
});
app.listen(8080, "localhost");
console.log("Webp Converter server started successfully");
