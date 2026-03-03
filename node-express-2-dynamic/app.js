const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// setting a global value
app.set("view engine", "pug"); // engine -> pug
app.set("views", "views"); // views folder -> views

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "404 - not found" });
});

app.listen(3000);
