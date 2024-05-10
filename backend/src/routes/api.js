const express = require("express");
const router = express.Router();
const FileController = require("../controller/FileController");
const ImageController = require("../");
// PUT an item
router.post("/files", FileController.upload);
router.get("/files");
// Add more routes for updating and deleting items

module.exports = router;
