const formatService = require("../services/FileFormatService");
class FormatController {
  init = () => formatService.init();
}
module.exports = new FormatController();
