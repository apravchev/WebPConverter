const { Model } = require("sequelize");
class FileInfo extends Model {}
module.exports = (sequelize, DataTypes) => {
  return FileInfo.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      size: { type: DataTypes.INTEGER, allowNull: false },
      path: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, tableName: "files", underscored: true }
  );
};
