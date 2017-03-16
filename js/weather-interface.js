var Weather = require('./../js/weather.js').weatherModule;
var apiKey = require('./../.env').apiKey;
var displayHumidity = function (city, humidityData) {
    $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function () {
    var currentWeatherObject = new Weather();
    $('#weatherLocation').click(function () {
        var city = $('#location').val();
        $('#location').val("");
        currentWeatherObject.getWeather(city, displayHumidity); // the short way 

    });
    $('#weatherPressure').click(function () {
        var city = $('#pressure').val();
        $('#pressure').val("");
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
            console.log(response)
            $('.showWeather').text("The Pressure in " + city + " is " + response.main.pressure + "pa");
        }).fail(function (error) {
            $('.showWeather').text(error.responseJSON.message);
        })
    }); //the long way
    $('#weatherTemperature').click(function () {
        var city = $('#temp').val();
        $('#temp').val("");
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function (response) {
            console.log(response)
            $('.showWeather').text("The Temperature in " + city + " is " + response.main.temp + " Fahrenheits ");
        }).fail(function (error) {
            $('.showWeather').text(error.responseJSON.message);
        })
    });

});
