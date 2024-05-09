class FileDBMapper {
  fhService;
  iRepo;
  constructor() {
    this.fhService = require("./FileHandler");
    this.iRepo = require("../repositories/imageRepository");
  }
  async sync() {
    const files = await this.fhService.getAll();
    if (Array.isArray(files)) {
      await this.iRepo.createMultiple(files);
      const dbFiles = await this.iRepo.getAllImages();
      if (dbFiles.length !== files.length) {
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
        if (ids.length > 0) {
          await this.iRepo.deleteMatchingIds(ids);
        }
      }
    }
    return files;
  }
}

module.exports = new FileDBMapper();
