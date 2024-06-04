const express = require("express");
const ImageController = require("../controller/ImageController");
const FormatController = require("../controller/FormatController");
const router = express.Router();

router.route("/images").get(ImageController.find).post(ImageController.upload);
router.route("/formats").get(FormatController.getAll);
module.exports = router;
