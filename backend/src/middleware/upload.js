const util = require("util");
const multer = require("multer");
const path = require("path");
const maxSize = 108 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const date = new Date();
    console.log(
      path.join(
        global.__basedir +
          "/resources/assets/upload/" +
          date.toISOString().substring(0, 10)
      )
    );
    cb(null, path.join(global.__basedir + "/resources/assets/upload"));
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});
const uploadFile = multer({ storage, limits: { fileSize: maxSize } }).array(
  "files",
  10
);
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;