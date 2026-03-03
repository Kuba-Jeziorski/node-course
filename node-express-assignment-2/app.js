const express = require("express");
const app = express();

const path = require("path");

const homepageTemplate = require("./routes/homepage");
const usersTemplate = require("./routes/users");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(usersTemplate);
app.use(homepageTemplate);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
