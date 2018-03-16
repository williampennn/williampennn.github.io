//Franklin
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
    document.getElementById('franklinSummary').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
}

//Springfield
var weatherObjectSpringfield = new XMLHttpRequest();

weatherObjectSpringfield.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/conditions/q/MN/Springfield.json', true);
weatherObjectSpringfield.send();

weatherObjectSpringfield.onload = function() {
    
    var weatherInfoSpringfield = JSON.parse(weatherObjectSpringfield.responseText);
    console.log(weatherInfoSpringfield);
    
    document.getElementById('springfieldcurrentweather').innerHTML = weatherInfoSpringfield.current_observation.weather;
    document.getElementById('springfieldtemperature').innerHTML = weatherInfoSpringfield.current_observation.temp_f;
    document.getElementById('springfieldwindspeed').innerHTML = weatherInfoSpringfield.current_observation.wind_gust_mph;
    document.getElementById('springfieldweatherconditions').src = weatherInfoSpringfield.current_observation.icon_url;
}

var weatherObjectForecastSpringfield = new XMLHttpRequest();

weatherObjectForecastSpringfield.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/forecast/q/MN/Springfield.json', true);
weatherObjectForecastSpringfield.send();

weatherObjectForecastSpringfield.onload = function()
{
    var forecastInfoSpringfield = JSON.parse(weatherObjectForecastSpringfield.responseText);    
    document.getElementById('springfieldSummary').innerHTML = forecastInfoSpringfield.forecast.txt_forecast.forecastday["0"].fcttext;
    
}
// Greenville

var weatherObjectGreenville = new XMLHttpRequest();

weatherObjectGreenville.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/conditions/q/UT/Greenville.json', true);
weatherObjectGreenville.send();

weatherObjectGreenville.onload = function() {
    
    var weatherInfoGreenville = JSON.parse(weatherObjectGreenville.responseText);
        console.log(weatherInfoGreenville);
    document.getElementById('greenvillecurrentweather').innerHTML = weatherInfoGreenville.current_observation.weather;
    document.getElementById('greenvilletemperature').innerHTML = weatherInfoGreenville.current_observation.temp_f;
    document.getElementById('greenvillewindspeed').innerHTML = weatherInfoGreenville.current_observation.wind_gust_mph;
    document.getElementById('greenvilleweatherconditions').src = weatherInfoGreenville.current_observation.icon_url;
}

var weatherObjectForecastGreenville = new XMLHttpRequest();

weatherObjectForecastGreenville.open('GET',
                   'https://api.wunderground.com/api/25ccf8b03ebbb0ee/forecast/q/UT/Greenville.json', true);
weatherObjectForecastGreenville.send();

weatherObjectForecastGreenville.onload = function()
{
    var forecastInfoGreenville = JSON.parse(weatherObjectForecastGreenville.responseText);    
    document.getElementById('greenvilleSummary').innerHTML = forecastInfoGreenville.forecast.txt_forecast.forecastday["0"].fcttext;
    
}

    