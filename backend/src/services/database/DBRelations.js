class DatabaseRelationsService {
  models;
  constructor(models) {
    this.models = models;
  }
  createOneToMany(one, many) {
    many.belongsTo(one);
    one.hasMany(many);
  }
  createOneToOne(one, two) {
    one.hasOne(two);
    two.belongsTo(one);
  }
  createAssociations() {
    const { FileInfo, FileFormat, ConversionConfiguration, ConversionInfo } =
      this.models;
    this.createOneToMany(FileFormat, FileInfo);
    this.createOneToMany(FileFormat, ConversionConfiguration);
    FileInfo.belongsToMany(FileInfo, {
      through: ConversionInfo,
      otherKey: "converted_id",
      foreignKey: "original_id",
      as: "converted_id",
    });
    ConversionConfiguration.hasMany(ConversionInfo);
    ConversionInfo.belongsTo(ConversionConfiguration);
  }
}
module.exports = DatabaseRelationsService;
