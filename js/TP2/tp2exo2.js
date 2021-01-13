


// replace "toner" here with "terrain" or "watercolor"
var layer = new L.StamenTileLayer("terrain");
var mymap2 = new L.Map("mapExo2", {
    center: new L.LatLng(25.037590, -70.713374),
    zoom: 4
});
mymap2.addLayer(layer);

var polygon = L.polygon([
    [32.245660, -64.836833],
    [26.651530, -80.015616],
    [18.470232, -67.759726]
],
    {
    color: 'red'
}).addTo(mymap2);




let latitude = 0;
let longitude = 0;

myPosition = navigator.geolocation.getCurrentPosition(succesGPS, errorGPS);

function succesGPS(pos) {
    let latitudePos = pos.coords.latitude;
    let longitudePos = pos.coords.longitude;
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    return true;
}

function errorGPS(err) {
    console.log("erreur chargement geolocalisation");
    return false;
}

console.log();


var layer2 = new L.StamenTileLayer("terrain");
var mymap2_2 = L.map('map2Exo2').setView([43.7073254545, 7.258651554], 9);
mymap2_2.addLayer(layer2);

console.log(latitude);

var nice = L.marker([resultat]).addTo(mymap2_2);

