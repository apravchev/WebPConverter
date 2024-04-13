const util = require("util");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const maxSize = 108 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    date = new Date();
    const location = path.join(global.__basedir + "/public/assets/upload");

    cb(null, location);
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
