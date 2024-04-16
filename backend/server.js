const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("./src/middleware/compression");
const app = express();
const PORT = process.env.PORT || 3000;
global.__basedir = __dirname;
global.__PORT = PORT;
// Middleware
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public/", express.static(__dirname + "/public/assets/upload"));
app.use(compression);
// Routes
app.use("/api", require("./src/routes/api"));
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
