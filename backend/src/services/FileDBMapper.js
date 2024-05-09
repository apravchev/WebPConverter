class FileDBMapper {
  fhService;
  iRepo;
  constructor() {
    this.fhService = require("./FileHandler");
    this.iRepo = require("../repositories/imageRepository");
  }
  async sync() {
    const files = await this.fhService.getAll();
    const fileInfos = await this.iRepo.getAllImages();
    console.log("List of files " + files);
    if (Array.isArray(files) && Array.isArray(fileInfos)) {
      await this.iRepo.createMultiple(files);
      const dbFiles = await this.iRepo.getAllImages();
      const ids = [];
      dbFiles.forEach((file) => {
        if (
          !files.find((item) => {
            return item.name == file.name && item.path == file.path;
          })
        ) {
          ids.push(file.id);
        }
      });
      await this.iRepo.deleteMatchingIds(ids);
    }
    return files;
  }
}

module.exports = new FileDBMapper();
