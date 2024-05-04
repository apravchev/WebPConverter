const FileInfo = require("../models").FileInfo;

class ImageRepository {
  async createImage(FileInst) {
    return await FileInst.save();
  }

  async getImageById(id) {
    return await FileInfo.findByPk(id);
  }
}
module.exports = new ImageRepository();
