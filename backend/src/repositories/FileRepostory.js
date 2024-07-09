const { promisify } = require("util");
const fs = require("fs");
const path = require("path");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const util = require("util");
const multer = require("multer");
const maxSize = 108 * 1024 * 1024;
class FileRepostory {
  location;
  storage;
  constructor() {
    console.log(global);
    this.location = path.join(global.__basedir, "/public/assets/upload");
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        date = new Date();
        cb(null, this.location);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
  }
  upload = async (req, res) => await this._uploadFile(req, res);
  delete = async (file) => await this._deleteFile(file);
  _uploadFile = util.promisify(
    multer({ storage: this.storage, limits: { fileSize: maxSize } }).array(
      "files",
      10
    )
  );
  _deleteFile = async (file) => {
    console.log(file);
    const location = path.join(
      this.location,
      file.path.split("public/").at(-1)
    );
    await fs.unlink(location, (err) => {
      if (err) {
        console.error(err);
        throw new Error("Failed to delete file");
      }
    });
  };
  async getAll() {
    const directoryPath = path.join(__basedir, "/public/assets/upload/");
    const files = await readdir(directoryPath);
    const pathContent = Promise.all(
      files.map(async (file) => {
        const stats = await stat(path.join(directoryPath, file));
        return {
          name: file,
          path: "public/" + file,
          size: stats?.size,
          format: file.split(".").at(-1),
        };
      })
    );
    return await pathContent;
  }
}
module.exports = new FileRepostory();
