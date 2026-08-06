const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// more then one thing is exported from the homepage.js
const homepageData = require("./routes/homepage");
const usersRoutes = require("./routes/users");

const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homepageData.routes);
app.use(usersRoutes);

app.listen(3000);
