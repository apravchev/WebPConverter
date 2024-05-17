const FileInfo = require("../models").FileInfo;
const { Op } = require("sequelize");
/**
 * Handles Database Image Entires
 */
class ImageRepository {
  async create(FileInst) {
    try {
      return await FileInst.save();
    } catch (err) {
      throw err;
    }
  }
  async createMultiple(files) {
    try {
      return await FileInfo.bulkCreate(files, { ignoreDuplicates: true });
    } catch (err) {
      throw err;
    }
  }
  async getById(id) {
    return await FileInfo.findByPk(id);
  }
  /**
   * Only use in bulk operations
   */
  async getAll() {
    return await FileInfo.findAll();
  }
  async deleteByIds(ids) {
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
}
module.exports = new ImageRepository();
