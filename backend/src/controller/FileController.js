const FileHandlerService = require("../services/FileHandler");

class FileController {
  uploadImage = (req, res) => FileHandlerService.upload(req, res);
  deleteImage;
}
module.exports = new FileController();
