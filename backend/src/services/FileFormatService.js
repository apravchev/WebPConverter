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
}
module.exports = new FileFormatService();
