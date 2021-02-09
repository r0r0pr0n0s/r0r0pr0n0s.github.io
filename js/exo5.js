gps = navigator.geolocation.getCurrentPosition(succesGPS, errorGPS);

function succesGPS(pos) {
    document.getElementById("test").innerHTML = "latitude : " + pos.coords.latitude + ", longitude : " + pos.coords.longitude;
}

function errorGPS(err) {
    document.getElementById("test").innerHTML = "erreur";
}

function handleOrientation(e) {
    var alpha = e.alpha;
    document.getElementById("orientation").innerHTML = "Orientation : " + alpha + " °."
}

window.addEventListener("deviceorientation", handleOrientation, true);