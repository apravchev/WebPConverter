const util = require("util");
const multer = require("multer");
const path = require("path");
const maxSize = 108 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    date = new Date();
    const location = path.join(global.__basedir, "/public/assets/upload");
    cb(null, location);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadFile = multer({ storage, limits: { fileSize: maxSize } }).array(
  "files",
  10
);
const uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
