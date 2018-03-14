var weatherObject = new XMLHttpRequest();

weatherObject.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/conditions/q/MN/Franklin.json', true);
weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('franklincurrentweather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('franklintemperature').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('franklinwindspeed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('franklinweatherconditions').src = weatherInfo.current_observation.icon_url;
}

var weatherObjectForecast = new XMLHttpRequest();

weatherObjectForecast.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/forecast/q/MN/Franklin.json', true);
weatherObjectForecast.send();

weatherObjectForecast.onload = function()
{
    var forecastInfo = JSON.parse(weatherObjectForecast.responseText);
    console.log(forecastInfo);
    document.getElementById('franklinSummary').innerHTML = weatherObjectForecast.forecast.txt_forecast.forecastday.fcttext
    
}
    