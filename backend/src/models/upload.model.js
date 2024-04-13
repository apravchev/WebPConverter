class UploadedFile {
  fileName = "";
  size = 0;
  location = "";
  constructor(fileName, size, location) {
    this.fileName = fileName;
    this.size = size;
    this.location = location;
  }
}
module.exports = UploadedFile;
