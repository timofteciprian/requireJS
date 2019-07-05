define(function(require) {
  function navbar() {
    var ul = document.createElement("ul");
    document.getElementById("nav").appendChild(ul);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Home");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Films");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("People");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Planets");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Species");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Vehicles");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);

    var li = document.createElement("li");
    ul.appendChild(li);
    var a = document.createElement("a");
    var newContent = document.createTextNode("Starships");
    a.setAttribute("href", "");
    a.appendChild(newContent);
    li.appendChild(a);
  }
  return {
    navbar: navbar
  };
});
