const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("./middleware/compression");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");
global.__basedir = path.join(__dirname, "/..");
global.__PORT = PORT;
// Middleware
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression);
app.use(
  "/public/",
  express.static(path.join(global.__basedir, "/public/assets/upload"))
);
// Routes
app.use("/api", require("./routes/api"));
// Start the server
db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
