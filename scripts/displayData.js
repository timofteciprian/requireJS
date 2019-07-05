define(function(require) {
  var retrive = require("./util");

  function displayFilm() {
    var promise = retrive.retriveData("https://swapi.co/api/films");
    promise.then(item =>
      item.results.map(element => {
        var div = document.createElement("div");

        var div1 = document.createElement("div");
        div.appendChild(div1);

        var div2 = document.createElement("div");
        div1.appendChild(div2);

        var h2 = document.createElement("h2");
        div2.appendChild(h2);

        var btn = document.createElement("Button");
        btn.innerHTML = element.title;
        h2.appendChild(btn);

        var div3 = document.createElement("div");
        div1.appendChild(div3);

        var div4 = document.createElement("div");
        div3.appendChild(div4);

        var title = document.createElement("p");
        title.innerHTML = element.title;
        div4.appendChild(title);

        var opening_crawl = document.createElement("p");
        opening_crawl.innerHTML = element.opening_crawl;
        div4.appendChild(opening_crawl);

        document.getElementById("containerFilm").appendChild(div);
      })
    );
  }

  var displayPeople = function() {
    var promise = retrive.retriveData("https://swapi.co/api/people");
    promise.then(element =>
      element.results.map(item => {
        var div = document.createElement("div");

        var div1 = document.createElement("div");
        div.appendChild(div1);

        var div2 = document.createElement("div");
        div1.appendChild(div2);

        var h2 = document.createElement("h2");
        div2.appendChild(h2);

        var btn = document.createElement("Button");
        btn.innerHTML = item.name;
        h2.appendChild(btn);

        var div3 = document.createElement("div");
        div1.appendChild(div3);

        var div4 = document.createElement("div");
        div3.appendChild(div4);

        var title = document.createElement("h4");
        title.innerHTML = "Details: ";
        div4.appendChild(title);

        var title = document.createElement("p");
        title.innerHTML = item.mass;
        div4.appendChild(title);

        var opening_crawl = document.createElement("p");
        opening_crawl.innerHTML = item.hair_color;
        div4.appendChild(opening_crawl);

        var title = document.createElement("h5");
        title.innerHTML = "Films: ";
        div4.appendChild(title);

        item.films.map(film => {
          promise = retrive.retriveData(film);
          promise.then(item => {
            var film = document.createElement("p");
            film.innerHTML = item.title;
            div4.appendChild(film);
          });
        });

        document.getElementById("containerPeople").appendChild(div);
      })
    );
  };

  return {
    displayFilm: displayFilm,
    displayPeople: displayPeople
  };
});
