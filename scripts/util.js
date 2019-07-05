define(function(require) {
  var retriveData = function(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.responseType = "text";
      request.open("GET", url);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        } else {
          reject(Error(request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error("Error"));
      };
      request.send();
    });
  };

  return {
    retriveData: retriveData
  };
});
