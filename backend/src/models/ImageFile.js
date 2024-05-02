const { Model } = require("sequelize");
class ImageFile extends Model {}
module.exports = (sequelize, DataTypes) => {
  ImageFile.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      size: { type: DataTypes.INTEGER, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      dateAdded: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      convertFrom: {
        type: DataTypes.INTEGER,
        references: { model: ImageFile, key: "id" },
        allowNull: true,
      },
      convertConfig: { type: DataTypes.STRING, allowNull: true },
    },
    { sequelize, modelName: "ImageFile" }
  );
  return ImageFile;
};
