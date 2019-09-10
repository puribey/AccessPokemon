const Sequelize = require("sequelize");
const db = require("../config/database");

const Pokemon = db.define("pokemon", {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Pokemon;
