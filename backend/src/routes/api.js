const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const controller = require("../controller/file.controller");
// PUT an item
router.post("/files", controller.upload);

// Add more routes for updating and deleting items

module.exports = router;
