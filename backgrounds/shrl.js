document.getElementById("share-location").addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/location");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }));
    });
  });
  