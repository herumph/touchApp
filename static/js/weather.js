function getWeather (url) {
    $.getJSON(url, function(data) {
        document.getElementById('sw_1').innerHTML = data.current_observation.display_location.full;
        document.getElementById('sw_2').innerHTML = "Temperature: "+data.current_observation.temperature_string;
        document.getElementById('sw_3').innerHTML = "Dewpoint: "+data.current_observation.dewpoint_string;
        document.getElementById('sw_4').innerHTML = "Humidity: "+data.current_observation.relative_humidity;
        document.getElementById('sw_5').innerHTML = "Pressure (mb): "+data.current_observation.pressure_mb;
        document.getElementById('sw_6').innerHTML = "Rain: "+data.current_observation.precip_today_string;
        document.getElementById('sw_7').src = data.current_observation.icon_url;
    });
}

setInterval(getWeather('http://api.wunderground.com/api/f0757c542540191b/conditions/q/FL/Tallahassee.json'), 600000)