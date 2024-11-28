const sequelize = require("sequelize");
const db = new sequelize("loginForm", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;
