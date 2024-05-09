class DatabaseRelationsService {
  models;
  constructor(models) {
    this.models = models;
  }
  createOneToMany(one, many) {
    one.hasMany(many);
    many.belongsTo(one);
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
    this.createOneToMany(ConversionConfiguration, ConversionInfo);
    FileInfo.belongsToMany(FileInfo, {
      through: ConversionInfo,
      otherKey: "converted_id",
      foreignKey: "original_id",
      as: "converted_id",
    });
  }
}
module.exports = DatabaseRelationsService;
