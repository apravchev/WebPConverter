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
  }
  createAssociations() {
    const { FileInfo, FileFormat, ConversionConfiguration, ConversionInfo } =
      this.models;

    // Formats / Configs - O-M
    FileFormat.belongsTo(ConversionConfiguration);
    ConversionConfiguration.hasMany(FileFormat);
    // - Conversion Relations
    ConversionInfo.belongsTo(FileInfo, {
      foreignKey: "original_id",
    });
    ConversionInfo.belongsTo(FileInfo, {
      foreignKey: "converted_id",
    });
    ConversionInfo.belongsTo(ConversionConfiguration, {
      foreignKey: "config_id",
    });
    FileInfo.hasMany(ConversionInfo);
    FileInfo.hasOne(FileFormat);
    FileInfo.hasMany(ConversionConfiguration);
  }
}
module.exports = DatabaseRelationsService;
