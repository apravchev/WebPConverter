const FileInfo = require("../models").FileInfo;

class ImageService {
  iRepo;
  fileRepo;
  formatRepo;
  constructor() {
    this.iRepo = require("../repositories/ImageRepository");
    this.fileRepo = require("../repositories/FileRepostory");
    this.formatRepo = require("../repositories/FileFormatRepository");
  }
  add = async (req, res) => {
    try {
      await this.fileRepo.upload(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      this.createImages(req.files);
      res.status(200).send({
        message: "Uploaded the files successfully: ",
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the files: ${err}`,
      });
    }
  };
  addMultiple() {}
  async createImages(images) {
    const formats = [];
    images.forEach(async (image) => {
      const fileFormat = image.name.split(".").at(-1).toLowerCase();
      let format = formats.find((form) => form.name == fileFormat);
      if (!format) {
        format = await this.formatRepo.findByName(fileFormat);
      }

      if (!!format) {
        formats.push(format);
        return await this._createImage(image, format.id);
      } else console.error("Unsupported File Format ! " + fileFormat);
    });
  }
  async _createImage(image, formatId) {
    return await this.iRepo
      .create(
        FileInfo.build({
          name: image.name || image.filename,
          size: image.size,
          path: `public/${image.name || image.filename}`,
          FileFormatId: formatId,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  }
  get = async (req, res) => {
    const id = req.query.id;
    const query = req.query.query;
    if (id) {
      const files = await this.iRepo.getById(id);
      return res.status(200).send({ files: [files] });
    } else {
      const files = await this.iRepo.getAll();
      return res.status(200).send({ files: files });
    }
  };

  getImageBySearch(req, res) {}
  delete = async (req, res) => {};
  _getFiles = () => {
    return this.fileRepo.getAll();
  };

  _getImageById(id) {
    return this.iRepo.getById(id);
  }
}
module.exports = new ImageService();
