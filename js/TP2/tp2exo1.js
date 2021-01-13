gps = navigator.geolocation.getCurrentPosition(succesGPS, errorGPS);

function succesGPS(pos) {
    document.getElementById("test").innerHTML = "latitude : " + pos.coords.latitude + ", longitude : " + pos.coords.longitude;
}

function errorGPS(err) {
    document.getElementById("test").innerHTML = "erreur";
}

var mymap = L.map('map').setView([43.7073, 7.2586], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,

    accessToken: 'pk.eyJ1IjoicjByMHByMG4wcyIsImEiOiJja2p2NWY4enkwNW5sMndzZGh1ajFoZ2RrIn0.ylKAWWvX6_dYnInB8NjqUQ'
}).addTo(mymap);

var nice = L.marker([43.704079, 7.254507]).addTo(mymap);