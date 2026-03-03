const path = require("path");
const express = require("express");

const router = express.Router();

const pathDir = require("../utils/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(pathDir, "views", "homepage.html"));
});

module.exports = router;
