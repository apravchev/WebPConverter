const { Model } = require("sequelize");

class FileFormat extends Model {}
module.exports = (sequelize, DataTypes) => {
  FileFormat.init(
    {
      configId: {
        type: DataTypes.INTEGER,
        references: {
          model: "conversion_configs",
          key: "id",
        },
      },
      name: DataTypes.STRING,
    },
    { sequelize, tableName: "file_formats", underscored: true }
  );
  return FileFormat;
};
