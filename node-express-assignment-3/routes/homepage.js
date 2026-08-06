const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  // "homepage" --> find views/homepage.ejs; string must match the file
  res.render("homepage", {
    pageTitle: "Homepage",
    path: "/",
  });
});

// url that this post request is sent to
router.post("/users", (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect("/users");
});

// module.exports = router;
exports.routes = router;
exports.users = users;
