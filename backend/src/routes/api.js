const express = require("express");
const router = express.Router();
const FileController = require("../controller/FileController");
// PUT an item
router.post("/files", FileController.uploadImage);

// Add more routes for updating and deleting items

module.exports = router;
