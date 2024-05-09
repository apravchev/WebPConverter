const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("./src/middleware/compression");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./src/models");
const initialize = require("./src/init");
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
app.use(compression);
app.use(
  "/public/",
  express.static(path.join(__dirname, "/public/assets/upload"))
);
// Routes
app.use("/api", require("./src/routes/api"));
// Start the server
db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    initialize().then(
      console.log(`Server Initialized and running on port : ${PORT}`)
    );
  });
});
