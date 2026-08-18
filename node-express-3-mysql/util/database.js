const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "S0t065Xt4DRc", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
