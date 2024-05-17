class FileDBMapper {
  iService;
  iRepo;
  constructor() {
    this.iService = require("./ImageService");
    this.iRepo = require("../repositories/ImageRepository");
  }
  async sync() {
    const files = await this.iService._getFiles();
    if (Array.isArray(files)) {
      await this.iService.createImages(files);
      const dbFiles = await this.iRepo.getAll();
      if (dbFiles.length !== files.length) {
        const ids = [];
        dbFiles.forEach((file) => {
          if (
            !files.find((item) => {
              return (
                item.name == file.name &&
                item.path == file.path &&
                item.format == file.format
              );
            })
          ) {
            ids.push(file.id);
          }
        });
        if (ids.length > 0) {
          await this.iRepo.deleteByIds(ids);
        }
      }
    }
    return files;
  }
}

module.exports = new FileDBMapper();
