const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");

// Middleware
// app.use((req, res, next) => {
//   console.log(`In the middleware`);
//   next(); // This allows the request to continue to the next middleware
// });

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false })); // newer version

app.use(express.static(path.join(__dirname, "public")));

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>',
//   );
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// start of the path - /admin
app.use("/admin", adminRoutes);

// no next() in previous request - below code wont be executed (without redirection)
// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello from Express</h1>");
// });

app.use(shopRoutes);

// 404
// app.use so the way to get here (GET, POST) doesnt matter
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found</h1>");
  res.sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
