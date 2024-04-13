const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
global.__basedir = __dirname;
// Middleware
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// Routes
app.use("/api", require("./src/routes/api"));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
