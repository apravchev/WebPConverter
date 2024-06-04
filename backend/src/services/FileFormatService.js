class FileFormatService {
  fFormatRepo;
  initiated = false;
  initialValues = ["jpeg", "jpg", "png", "webp"];
  constructor() {
    this.fFormatRepo = require("../repositories/FileFormatRepository");
  }
  async init() {
    if (!this.initiated) {
      return await this.createMultiple(this.initialValues);
    }
  }
  async createMultiple(formats) {
    return await this.fFormatRepo.createMultiple(formats);
  }
  async create(format) {
    return await this.fFormatRepo.create(format);
  }
  async getAll(req, res) {
    const formats = await this.fFormatRepo.findAll();
    res.code(200).send({ result: { ...formats } });
  }
}
module.exports = new FileFormatService();
