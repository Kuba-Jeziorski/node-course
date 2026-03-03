const path = require("path");
const express = require("express");

const router = express.Router();

const pathDir = require("../utils/path");

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(pathDir, "views", "users.html"));
});

module.exports = router;
