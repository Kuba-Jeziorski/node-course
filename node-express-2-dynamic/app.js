const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

// setting a global value
// registering express engine
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   }),
// );
app.set("view engine", "ejs"); // engine -> ejs
// app.set("view engine", "hbs"); // engine -> hbs
// app.set("view engine", "pug"); // engine -> pug
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
  res.status(404).render("404", {
    pageTitle: "404 - not found",
    path: null,
  });
});

app.listen(3000);
