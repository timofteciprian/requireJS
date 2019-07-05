define(function(require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var navbar = require("./navbar");
  var data = require("./displayData");

  data.displayPeople();
  data.displayFilm();
  navbar.navbar();
});
