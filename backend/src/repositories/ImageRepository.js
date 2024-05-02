const ImageFile = require("../models").ImageFile;

class ImageRepository {
  async createImage(name, size, location, dateAdded) {
    console.log(name, size, location);
    return await ImageFile.create({ name, size, location, dateAdded });
  }

  async getImageById(id) {
    return await ImageFile.findByPk(id);
  }
}
module.exports = new ImageRepository();
