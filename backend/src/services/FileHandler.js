const ImageRepository = require("../repositories/imageRepository");
const uploadFile = require("../middleware/upload");
const { promisify } = require("util");
const FileInfo = require("../models").FileInfo;
const fs = require("fs");
const path = require("path");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
class FileHandlerService {
  iService;
  constructor() {
    this.iService = require("./ImageService");
  }
  upload = async (req, res) => {
    try {
      await uploadFile(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      req.files.forEach(async (file) => await this.iService.createImage(file));
      res.status(200).send({
        message: "Uploaded the files successfully: ",
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the files: ${err}`,
      });
    }
  };
  delete = async (req, res) => {};
  // TODO
  async getAll() {
    const directoryPath = path.join(__basedir, "/public/assets/upload/");
    const files = await readdir(directoryPath);
    const pathContent = Promise.all(
      files.map(async (file) => {
        const stats = await stat(path.join(directoryPath, file));
        return {
          name: file,
          path: path.join(__basedir, file),
          size: stats?.size,
        };
      })
    );
    return pathContent;
  }
}
module.exports = new FileHandlerService();
