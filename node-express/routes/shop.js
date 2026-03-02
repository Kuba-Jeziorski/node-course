const path = require("path");
const express = require("express");

const router = express.Router();

const pathDir = require("../util/path");

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express</h1>");
  // __dirname - setting a "root" in this particular folder
  // res.sendFile(__dirname, "..", "views", "shop.html")
  res.sendFile(path.join(pathDir, "views", "shop.html"));
});

module.exports = router;
