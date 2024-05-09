/**
 * Use this to trigger
 * events right after the server has starter
 * current use case :
 * Syncing files to database
 */
const dbMapper = require("./services/FileDBMapper");
async function initialize() {
  await dbMapper.sync();
}
module.exports = initialize;
