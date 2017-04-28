/**
 * Created by micahdisney on 4/28/17.
 */







var weather_info = $('.w_divcontent');
var address = $('#address');
address.val('');
var submit = $('#submit2');
var h3 = $('h3');



///-----------------------------------------------------------------------------------//


$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "8e215085dd374a78155aa7bdb365e857",
    q:     "San Antonio, TX",
    cnt: 3,   //set to 3 day forecast
    units: "imperial"
}).done(function(data){
    console.log(data);
    var days = data.list;
    $(h3).html(data.city.name + ", " + data.city.country);
    for(i = 0; i < data.list.length; i++){
        var dayNumber = days[i];
        var temperature = dayNumber.temp;
        var icon = dayNumber.weather[0].icon;
        var description = dayNumber.weather[0].main;
        var subDescription = dayNumber.weather[0].description;
        var humidity = dayNumber.humidity;
        var wind = dayNumber.speed;
        var pressure = dayNumber.pressure;
        $(weather_info[i]).append("<p id='temp'>" + Math.round(temperature.max) + "°/" + Math.round(temperature.min) + "°" + "</p>");
        $(weather_info[i]).append("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");
        $(weather_info[i]).append("<p>" + description + ": " + subDescription + "</p>");
        $(weather_info[i]).append("<p>Humidity: " + humidity + "</p>");
        $(weather_info[i]).append("<p>Wind: " + wind + "</p>");
        $(weather_info[i]).append("<p>Pressure: " + pressure + "</p>");
    }
});


//--------------------------------MAP STUFF------------------------------------------------------------//

var mapOptions = {
    zoom: 4,
    center: {
        lat:  29.426791,    //San Antonio
        lng: -98.489602
    }
};


var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
var marker = new google.maps.Marker({
    draggable: true,
    position: mapOptions.center,
    map: map,
    title: "Your location"
});


google.maps.event.addListener(marker, 'dragend', function(event) {
    document.getElementById("lat").value = event.latLng.lat();
    document.getElementById("lon").value = event.latLng.lng();
    var latitude = parseFloat($('#lat').val());
    var longitude = parseFloat($('#lon').val());
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "8e215085dd374a78155aa7bdb365e857",
        lat: latitude,
        lon: longitude,
        cnt: 3,
        units: "imperial"
    }).done(function(data){
        var days = data.list;
        $(h3).html(data.city.name + ", " + data.city.country);
        $(weather_info).html('');
        for(i = 0; i < data.list.length; i++){
            var dayNumber = days[i];
            var temperature = dayNumber.temp;
            var icon = dayNumber.weather[0].icon;
            var description = dayNumber.weather[0].main;
            var subDescription = dayNumber.weather[0].description;
            var humidity = dayNumber.humidity;
            var wind = dayNumber.speed;
            var pressure = dayNumber.pressure;
            $(weather_info[i]).append("<p id='temp'>" + Math.round(temperature.max) + "°/" + Math.round(temperature.min) + "°" + "</p>");
            $(weather_info[i]).append("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");
            $(weather_info[i]).append("<p>" + description + ": " + subDescription + "</p>");
            $(weather_info[i]).append("<p>Humidity " + humidity + "</p>");
            $(weather_info[i]).append("<p>Wind: " + wind + "</p>");
            $(weather_info[i]).append("<p>Pressure: " + pressure + "</p>");
        }
    })
});


//--------------------------------GEOCODER---------------------------------------------------//


var geocoder = new google.maps.Geocoder();
submit.click(function(){
    geocoder.geocode({'address': address.val()}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            marker.setMap(null);
            marker.position = map.center;
            marker.setMap(map);
            document.getElementById("lat").value = marker.position.lat();
            document.getElementById("lon").value = marker.position.lng();
            var latitude = parseFloat($('#lat').val());
            var longitude = parseFloat($('#lon').val());



//--------------------------------------------------------------------------------------//


            $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
                APPID: "8e215085dd374a78155aa7bdb365e857",
                lat: latitude,
                lon: longitude,
                cnt: 3,
                units: "imperial"
            }).done(function(data){
                var days = data.list;
                $(h3).html(data.city.name + ", " + data.city.country);
                $(weather_info).html('');
                for(i = 0; i < data.list.length; i++){
                    var dayNumber = days[i];
                    var temperature = dayNumber.temp;
                    var icon = dayNumber.weather[0].icon;
                    var description = dayNumber.weather[0].main;
                    var subDescription = dayNumber.weather[0].description;
                    var humidity = dayNumber.humidity;
                    var wind = dayNumber.speed;
                    var pressure = dayNumber.pressure;
                    $(weather_info[i]).append("<p id='temp'>" + Math.round(temperature.max) + "°/" + Math.round(temperature.min) + "°" + "</p>");
                    $(weather_info[i]).append("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");
                    $(weather_info[i]).append("<p>" + description + ": " + subDescription + "</p>");
                    $(weather_info[i]).append("<p>Humidity: " + humidity + "</p>");
                    $(weather_info[i]).append("<p>Wind: " + wind + "</p>");
                    $(weather_info[i]).append("<p>Pressure: " + pressure + "</p>");
                }
            })
        } else {
            alert('didnt work' + status);
        }
    });













});