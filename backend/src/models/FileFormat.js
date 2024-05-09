const { Model } = require("sequelize");

class FileFormat extends Model {}
module.exports = (sequelize, DataTypes) => {
  FileFormat.init(
    {
      name: DataTypes.STRING,
    },
    { sequelize, tableName: "file_formats", underscored: true }
  );
  return FileFormat;
};
