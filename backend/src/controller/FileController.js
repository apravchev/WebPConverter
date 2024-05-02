const FileHandlerService = require("../services/fileHandler");

class FileController {
  uploadImage = (req, res) => FileHandlerService.upload(req, res);
  deleteImage;
}
module.exports = new FileController();
