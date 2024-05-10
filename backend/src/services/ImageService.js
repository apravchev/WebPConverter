const FileInfo = require("../models").FileInfo;

class ImageService {
  iRepo;
  constructor() {
    this.iRepo = require("../repositories/imageRepository");
  }
  createImage(image) {
    return this.iRepo
      .createImage(
        FileInfo.build({
          name: image.filename,
          size: image.size,
          path: `public/${image.filename}`,
        })
      )
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }
  getImageById(id) {
    return this.iRepo.getImageById(id);
  }
}
module.exports = new ImageService();
