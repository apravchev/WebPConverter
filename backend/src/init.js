const ImageController = require("./controller/ImageController");
const FormatController = require("./controller/FormatController");
/**
 * Use this to trigger
 * events right after the server has starter
 * current use case :
 * Syncing files to database
 */
async function initialize() {
  await FormatController.init();
  await ImageController.sync();
}
module.exports = initialize;
