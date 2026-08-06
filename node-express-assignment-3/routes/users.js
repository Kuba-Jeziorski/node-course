const express = require("express");

const router = express.Router();
const homepageData = require("./homepage");

router.get("/users", (req, res, next) => {
  const users = homepageData.users;

  res.render("users", {
    pageTitle: "Users",
    path: "/users",
    users: users,
  });
});

module.exports = router;
