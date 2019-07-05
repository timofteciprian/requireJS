define(function(require) {
  var navbar = require("./navbar");
  var data = require("./displayData");

  data.displayPeople();
  data.displayFilm();
  navbar.navbar();
});
