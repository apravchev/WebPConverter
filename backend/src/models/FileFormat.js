const { Model } = require("sequelize");

class FileFormat extends Model {}
module.exports = (sequelize, DataTypes) => {
  return FileFormat.init(
    {
      name: { type: DataTypes.STRING, unique: true },
    },
    { sequelize, tableName: "file_formats", underscored: true }
  );
};
