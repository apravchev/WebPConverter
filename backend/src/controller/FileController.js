const FileHandlerService = require("../services/FileHandlerService");

class FileController {
  uploadImage = (req, res) => FileHandlerService.upload(req, res);
  deleteImage;
}
module.exports = new FileController();
