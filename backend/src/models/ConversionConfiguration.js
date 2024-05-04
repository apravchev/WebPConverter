const { Model } = require("sequelize");

class ConversionConfiguration extends Model {}
module.exports = (sequelize, DataTypes) => {
  return ConversionConfiguration.init(
    {
      quality: DataTypes.INTEGER,
      compression: DataTypes.INTEGER,
      conversionMethod: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "conversion_configs",
      paranoid: true,
      underscored: true,
    }
  );
};
