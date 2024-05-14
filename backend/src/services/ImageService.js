const FileInfo = require("../models").FileInfo;

class ImageService {
  iRepo;
  fRepo;
  constructor() {
    this.iRepo = require("../repositories/imageRepository");
    this.fRepo = require("../repositories/FileRepostory");
  }
  add = async (req, res) => {
    try {
      await this.fRepo.upload(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      req.files.forEach(async (file) => await this._createImage(file));
      res.status(200).send({
        message: "Uploaded the files successfully: ",
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the files: ${err}`,
      });
    }
  };
  get = async (req, res) => {
    const id = req.query.id;
    const query = req.query.query;
    console.log(req.query);

    if (id) {
      const files = await this.iRepo.getImageById(id);
      console.log(files);
      return res.status(200).send({ files: [files] });
    } else {
      const files = await this.iRepo.getAllImages();
      console.log(files);
      return res.status(200).send({ files: files });
    }
  };
  getImageBySearch(req, res) {}
  delete = async (req, res) => {};
  _getAll = () => {
    return this.fRepo.getAll();
  };
  async _createImage(image) {
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
          return err;
        }
      });
  }
  _getImageById(id) {
    return this.iRepo.getImageById(id);
  }
}
module.exports = new ImageService();
