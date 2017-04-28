/**
 * Created by micahdisney on 4/28/17.
 */





var weather_info = $('.w_divcontent');
var address = $('#address');
address.val('');
var submit = $('#submit2');
var h3 = $('h3');



$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "8e215085dd374a78155aa7bdb365e857",
    q:     "San Antonio, TX",
    cnt: 3,
    units: "imperial"
}).done(function(data){




    var days = data.list;
    $(h3).html(data.city.name + ", " + data.city.country);
    for(i = 0; i < data.list.length; i++){
        var day = days[i];
        var daytemps = day.temp;
        $(weather_info[i]).append("<p>High: " + daytemps.max + " F" + "</p>");
        $(weather_info[i]).append("<p>Low: " + daytemps.min + " F" + "</p>");
        console.log(day);
        console.log(daytemps.max);


    }

});





var mapOptions = {
    zoom: 4,
    center: {
        lat:  29.426791,
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
            var day = days[i];
            var daytemps = day.temp;
            $(weather_info[i]).append("<p>High: " + daytemps.max + "F" + "</p>");
            $(weather_info[i]).append("<p>Low: " + daytemps.min + "F" + "</p>");




        }
    })
});





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
                    var day = days[i];
                    var daytemps = day.temp;
                    $(weather_info[i]).append("<p>High: " + daytemps.max + "F" + "</p>");
                    $(weather_info[i]).append("<p>Low: " + daytemps.min + "F" + "</p>");




                }
            })
        } else {
            alert('didnt work' + status);
        }
    });






});