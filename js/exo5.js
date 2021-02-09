gps = navigator.geolocation.getCurrentPosition(succesGPS, errorGPS);

function succesGPS(pos) {
    document.getElementById("test").innerHTML = "latitude : " + pos.coords.latitude + ", longitude : " + pos.coords.longitude;
}

function errorGPS(err) {
    document.getElementById("test").innerHTML = "erreur";
}

function handleOrientation(e) {
    let absolute = e.absolute;
    let alpha = e.alpha;
    let beta = e.beta;
    let gamma = e.gamma;
    document.getElementById("orientationAbsolute").innerHTML = "Orientation : " + absolute + " °.";
    document.getElementById("orientationAlpha").innerHTML = "Orientation : " + alpha + " °.";
    document.getElementById("orientationBeta").innerHTML = "Orientation : " + beta + " °.";
    document.getElementById("orientationGamma").innerHTML = "Orientation : " + gamma + " °.";
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(50, 10, 10, 100);
ctx.fillStyle = 'red';
ctx.fillRect(50, 10, 10, 10);

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation);
}
else {
    alert("Votre appareil ne supporte pas l'orientation.")
}
