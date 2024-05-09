const { Model } = require("sequelize");
class ConversionInfo extends Model {}
module.exports = (sequelize, DataTypes) => {
  ConversionInfo.init(
    {},
    { sequelize, tableName: "conversions", underscored: true }
  );
  return ConversionInfo;
};
