const { FileFormat } = require("../models");
class FileFormatRepository {
  async create(format) {
    return await FileFormat.create({ name: format });
  }
  async createMultiple(formats) {
    const entities = formats.map((format) => ({ name: format }));
    return await FileFormat.bulkCreate(entities, { ignoreDuplicates: true });
  }
  async findAll() {
    return await FileFormat.findAll({ attributes: ["name", "id"] });
  }
  async findByName(name) {
    return await FileFormat.findOne({ where: { name } });
  }
}
module.exports = new FileFormatRepository();
