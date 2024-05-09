const FileInfo = require("../models").FileInfo;
const { Op } = require("sequelize");
class ImageRepository {
  async createImage(FileInst) {
    return await FileInst.save();
  }
  async createMultiple(files) {
    return await FileInfo.bulkCreate(files, { ignoreDuplicates: true });
  }
  async deleteMatchingIds(ids) {
    if (Array.isArray(ids)) {
      return await FileInfo.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });
    }
  }

  async getImageById(id) {
    return await FileInfo.findByPk(id);
  }
  /**
   * Only use in bulk operations
   */
  async getAllImages() {
    return await FileInfo.findAll();
  }
}
module.exports = new ImageRepository();
