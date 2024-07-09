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
      const { files } = req;
      if (!files || files.length === 0) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      files.forEach((file) => {
        file.name = file.filename;
      });
      await this.create(files);
      res.status(200).send({ message: "Uploaded the files successfully." });
    } catch (err) {
      res.status(500).send({ message: `Could not upload the files: ${err}` });
    }
  };

  create = async (images) => {
    console.log(images);
    for (const image of images) {
      const fileFormat = image.name.split(".").at(-1).toLowerCase();
      const format = await this.formatRepo.findByName(fileFormat);
      if (format) {
        await this._createImage(image, format.id);
      } else {
        console.error("Unsupported File Format: " + fileFormat);
      }
    }
  };

  _createImage = async (image, formatId) => {
    try {
      const fileInfo = {
        name: image.name || image.filename,
        size: image.size,
        path: `public/${image.name || image.filename}`,
        FileFormatId: formatId,
      };
      await this.iRepo.create(FileInfo.build(fileInfo));
    } catch (err) {
      console.error(err);
    }
  };

  get = async (req, res) => {
    let { id, query, rows, first } = req.query;
    try {
      let result;
      if (id) {
        result = await this.iRepo.getById();
      } else {
        if (!!query) {
          result = await this.iRepo.getByQuery(query, first, rows);
        } else {
          result = await this.iRepo.getAll(first, rows);
        }
        result.files = result.rows;
        result.rows = rows;
        result.first = first;
      }
      res.status(200).send({ ...result });
    } catch (err) {
      res.status(500).send({ message: `Error fetching files: ${err}` });
    }
  };

  delete = async (req, res) => {
    let { id } = req.query;
    try {
      const file = await this.iRepo.getById(id);
      if (!!file) {
        await this.fileRepo.delete(file);
        await this.iRepo.deleteById(id);
        res.status(200).send({
          message: "File Deleted Successfully",
        });
      } else {
        res.send(500).send({
          message: "Error Deleting file: ",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  _getFiles = () => {
    return this.fileRepo.getAll();
  };

  _getImageById = (id) => {
    return this.iRepo.getById(id);
  };
}
module.exports = new ImageService();
