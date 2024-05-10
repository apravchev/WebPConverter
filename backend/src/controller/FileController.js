const FileHandlerService = require("../services/FileHandler");
const FileDBMapper = require("../services/FileDBMapper");

class FileController {
  upload = (req, res) => FileHandlerService.upload(req, res);
  delete = (req, res) => FileHandlerService.delete();
  sync = () => FileDBMapper.sync();
}
module.exports = new FileController();
