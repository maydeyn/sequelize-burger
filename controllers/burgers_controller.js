var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = { burgers: data };
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  Burger.update(req.params.id, function(result) {
    res.redirect("/");
  });
});

module.exports = router;
