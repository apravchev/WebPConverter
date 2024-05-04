class DatabaseRelationsService {
  models;
  constructor(models) {
    this.models = models;
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
    FileInfo.hasMany(FileFormat);
    FileInfo.hasMany(ConversionConfiguration);
  }
}
module.exports = DatabaseRelationsService;
