const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

// Get pokemon list
router.get("/", (req, res) =>
  Pokemon.findAll()
    .then(pokemon => {
      console.log(pokemon);
    })
    .catch(err => console.log(err))
);

// Add a pokemon
router.post("/add", (req, res) => {
  let { name, description, type, imageUrl } = req.body;

  // Validate fields e.g.
  let errors = [];
  if (!name || !description || !type || !imageUrl) {
    errors.push({ text: "Please complete all fields" });
  }
  if (errors.length > 0) {
    res.render("add", {
      errors,
      name,
      description,
      type,
      imageUrl
    });
  } else {
    // Insert into table
    Pokemon.create({
      name,
      description,
      type,
      imageUrl
    })
      .then(pokemon => console.log(pokemon))
      .catch(err => console.log(err));
  }
});

// Delete a pokemon
router.post("/delete/:id", (req, res) => {
  Gig.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(pokemon => console.log(pokemon))
    .catch(err => console.log(err));
});

module.exports = router;
