// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: "lib",
  paths: {
    scripts: "../scripts"
    //     bootstrap:
    //       "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min",
    //     jquery: "https://code.jquery.com/jquery-3.4.1"
    //   },
    //   shim: {
    //     bootstrap: ["jquery"]
  }
});

requirejs(["scripts/main"]);
