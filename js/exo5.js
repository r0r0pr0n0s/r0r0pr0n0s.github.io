gps = navigator.geolocation.getCurrentPosition(succesGPS, errorGPS);

function succesGPS(pos) {
    document.getElementById("test").innerHTML = "latitude : " + pos.coords.latitude + ", longitude : " + pos.coords.longitude;
}

function errorGPS(err) {
    document.getElementById("test").innerHTML = "erreur";
}

function handleOrientation(e) {
    let absolute = e.absolute;
    let alpha    = e.alpha;
    let beta     = e.beta;
    let gamma    = e.gamma;
    document.getElementById("orientationAbsolute").innerHTML = "Orientation : " + alpha + " °.";
    document.getElementById("orientationAlpha").innerHTML = "Orientation : " + alpha + " °.";
    document.getElementById("orientationBeta").innerHTML = "Orientation : " + alpha + " °.";
    document.getElementById("orientationGamma").innerHTML = "Orientation : " + alpha + " °.";
}

window.addEventListener("deviceorientation", handleOrientation, true);