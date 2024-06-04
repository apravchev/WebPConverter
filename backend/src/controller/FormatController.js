const formatService = require("../services/FileFormatService");
class FormatController {
  init = (req, res) => formatService.init();
  getAll = (req, res) => formatService.getAll(req, res);
}
module.exports = new FormatController();
