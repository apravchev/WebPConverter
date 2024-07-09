const FileInfo = require("../models").FileInfo;
const FileFormat = require("../models").FileFormat;
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

  async getByQuery(query, first = 0, rows = 10) {
    const options = {
      where: {
        name: { [Op.iLike]: query + "%" },
      },
      offset: first,
      limit: rows,
    };
    return await FileInfo.findAndCountAll(options);
  }

  async getById(id) {
    const options = {
      where: { id },
      include: FileFormat,
    };
    return await FileInfo.findOne(options);
  }

  async getAll(first = 0, rows = 10) {
    const options = {
      offset: first,
      limit: rows,
    };
    return await FileInfo.findAndCountAll(options);
  }

  /**
   * Only use in bulk operations
   */
  async _getAll() {
    return await FileInfo.findAll();
  }
  async deleteById(id) {
    if (!!id) {
      const options = {
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      };
      return await FileInfo.destroy(options);
    }
  }
  async deleteByIds(ids) {
    const options = {
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    };
    if (Array.isArray(ids) && ids.length > 0) {
      return await FileInfo.destroy(options);
    }
  }
}
module.exports = new ImageRepository();
