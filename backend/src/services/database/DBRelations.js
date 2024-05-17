const { DataTypes } = require("sequelize");

class DatabaseRelationsService {
  models;
  constructor(models) {
    this.models = models;
  }
  createOneToMany(one, many, nullable = true) {
    return Promise.all([
      one.hasMany(many, {
        foreignKey: {
          allowNull: nullable,
        },
      }),
      many.belongsTo(one, {
        foreignKey: {
          allowNull: nullable,
        },
      }),
    ]);
  }
  createOneToOne(one, two) {
    return Promise.all([one.hasOne(two), two.belongsTo(one)]);
  }
  async createAssociations() {
    const { FileInfo, FileFormat, ConversionConfiguration, ConversionInfo } =
      this.models;
    await this.createOneToMany(FileFormat, FileInfo, false);
    await this.createOneToMany(FileFormat, ConversionConfiguration);
    await this.createOneToMany(ConversionConfiguration, ConversionInfo);

    await FileInfo.belongsToMany(FileInfo, {
      through: ConversionInfo,
      otherKey: "converted_id",
      foreignKey: "original_id",
      as: "converted_id",
    });
  }
}
module.exports = DatabaseRelationsService;
