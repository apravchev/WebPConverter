const FileHandlerService = require("../services/FileHandler");
const FileDBMapper = require("../services/FileDBMapper");

class FileController {
  uploadImage = (req, res) => FileHandlerService.upload(req, res);
  deleteImage;
  syncImages = () => FileDBMapper.sync();
}
module.exports = new FileController();
