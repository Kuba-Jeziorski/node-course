const path = require("path");
const express = require("express");

const router = express.Router();
const adminData = require("./admin");

const pathDir = require("../util/path");

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(pathDir, "views", "shop.html"));
  const products = adminData.products;

  // views folder and templating engine are defined; no need for extra informations
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
