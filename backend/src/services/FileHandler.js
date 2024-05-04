const ImageRepository = require("../repositories/imageRepository");
const uploadFile = require("../middleware/upload");
const FileInfo = require("../models").FileInfo;
class FileHandlerService {
  constructor() {}
  upload = async (req, res) => {
    try {
      await uploadFile(req, res);
      if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      const files = req.files.map(
        async (file) =>
          await ImageRepository.createImage(
            FileInfo.build({
              name: file.filename,
              size: file.size,
              path: `public/${file.filename}`,
            })
          ).catch((err) => {
            if (err) {
              console.log(err);
            }
          })
      );
      res.status(200).send({
        message: "Uploaded the files successfully: ",
        files,
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the files:  ${err}`,
      });
    }
  };
  // TODO
  getMultiple = (req, res) => {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return res.status(500).send({
          message: "Unable to scan files!",
        });
      }

      const fileInfos = files.map((file) => ({
        name: file,
        url: baseUrl + file,
      }));

      res.status(200).send(fileInfos);
    });
  };
}
module.exports = new FileHandlerService();
