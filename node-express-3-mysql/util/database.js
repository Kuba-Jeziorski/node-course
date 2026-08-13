const mysql = require("mysql2");

// pool of connections
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "S0t065Xt4DRc",
});

module.exports = pool.promise();
