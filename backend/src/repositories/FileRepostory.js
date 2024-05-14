const { promisify } = require("util");
const fs = require("fs");
const path = require("path");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const uploadFile = require("../middleware/upload");
class FileRepostory {
  upload = (req, res) => uploadFile(req, res);
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
        };
      })
    );
    return await pathContent;
  }
}
module.exports = new FileRepostory();
