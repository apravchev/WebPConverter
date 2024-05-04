const { Model } = require("sequelize");
class ConversionInfo extends Model {}
module.exports = (sequelize, DataTypes) => {
  ConversionInfo.init(
    {
      originalId: {
        type: DataTypes.INTEGER,
        references: {
          model: "files",
          key: "id",
        },
      },
      convertedId: {
        type: DataTypes.INTEGER,
        references: {
          model: "files",
          key: "id",
        },
      },
      configId: {
        type: DataTypes.INTEGER,
        references: {
          model: "conversion_configs",
          key: "id",
        },
      },
    },
    { sequelize, tableName: "conversions", underscored: true }
  );
  return ConversionInfo;
};
