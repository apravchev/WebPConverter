const FileDBMapper = require("../services/FileDBMapper");
const ImageService = require("../services/ImageService");

class ImageController {
  upload = (req, res) => ImageService.add(req, res);
  delete = (req, res) => ImageService.delete();
  find = (req, res) => ImageService.get(req, res);
  sync = () => FileDBMapper.sync();
}
module.exports = new ImageController();
