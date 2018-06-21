var router = require("express").Router();

// This route renders the homepage


// This route renders the saved handledbars page
router.get("/saved", function(req, res) {
  res.render("saved");
});

router.get("/api/articles", function(req, res) {
  res.render("saved");
});

router.post("/api/articles", function(req, res) {
  res.render("saved");
});

router.delete("/api/articles", function(req, res) {
  res.render("saved");
});

router.get("/saved", function(req, res) {
  res.render("saved");
});

router.get("/", function(req, res) {
  res.render("home");
});

module.exports = router;
