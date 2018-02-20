function getRoom () {
    $.getJSON('/room', function(dat) {
        document.getElementById('nw_1').innerHTML = "Temperature (C): "+dat['temp'];
        document.getElementById('nw_2').innerHTML = "Humidity: "+dat['hum']+"%";
        document.getElementById('nw_3').innerHTML = "Pressure (mb): "+dat['press'];
    });
}

setInterval(getRoom, 30000)
