var express = require("express");

var router = express.Router();
var database = require("../models");

// get route -> index
router.get("/", function(req, res) {
  database.Burger.findAll({}).then(function(databaseBurger) {
    var hbsObject = { burgers: databaseBurger };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/api/burgers", function(req, res) {
  database.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  })
    .then(function(databaseBurger) {
      res.json({
        id: result.insertId
      });
    })
    .catch(function(err) {
      res.json(err);
    });
});

// put route -> back to index
router.put("/api/burgers/:id", function(req, res) {
  database.Burger.update(
    { devoured: true },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(function(databaseBurger) {
      res.json(databaseBurger);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
