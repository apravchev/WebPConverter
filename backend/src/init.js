const ImageController = require("./controller/ImageController");

/**
 * Use this to trigger
 * events right after the server has starter
 * current use case :
 * Syncing files to database
 */
async function initialize() {
  await ImageController.sync();
}
module.exports = initialize;
