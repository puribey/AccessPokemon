const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

// Get pokemon list
router.get("/", (req, res) =>
  Pokemon.findAll()
    .then(pokemon => {
      res.send(pokemon)
    })
    .catch(err => console.log(err))
);

// Add a pokemon
router.post("/add", (req, res) => {
  let { name, description, type, imageUrl } = req.body;
    Pokemon.create({
      name,
      description,
      type,
      imageUrl
    })
      .then(pokemon => res.send(pokemon))
      .catch(err => console.log(err));
});

// Delete a pokemon
router.post("/delete/:id", (req, res) => {
  Pokemon.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(pokemon => res.sendStatus(200))
    .catch(err => console.log(err));
});

module.exports = router;
