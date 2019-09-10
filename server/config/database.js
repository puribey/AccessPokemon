const Sequelize = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "pokemon",
  process.env.DB_USER,
  process.env.DB_USER_PSW,
  {
    host: "localhost",
    dialect: "postgres"
  }
);
