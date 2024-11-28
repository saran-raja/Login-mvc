const Sequelize = require("sequelize");
const db = require("../config/config");
const students = db.define("form", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
db.sync({ force: false })
  .then(() => {
    console.log("Database & tables created");
  })
  .catch((err) => {
    console.log("Error", err);
  });
module.exports = students;
