const express = require("express");
const ImageController = require("../controller/ImageController");
const router = express.Router();

router.route("/images").get(ImageController.find).post(ImageController.upload);

module.exports = router;
