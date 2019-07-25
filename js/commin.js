$(document).ready(function(){

    $("[type='button']").click(function(){
        var val = $(this).val();
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+ val +'&APPID=c2dcf8ffb5cdc3f8977bfd2ae7ea4738' ;


        $.ajax({
            type : 'GET',
            url : api_url,
            success : function (data) {

            var temperature= data.main.temp;
            var pressure= data.main.pressure;
            var humidity= data.main.humidity;
            var speed= data.wind.speed;
            var direction= data.wind.deg;

            var name ="<tr><th colspan=\"2\"> Misto " + data.name + "</th></tr>";
                $('thead').html(name );

                temp = "<tr><th>Temperature</th><td>"+ temperature + "</td></tr>"
                  +"<tr><th>Atmospheric pressure</th><td>" + pressure + " hPa</td></tr>"+
                "<tr><th>Humidity</th><td>" + humidity + " %</td></tr>"+
                "<tr><th>Wind speed</th><td>" + speed
                    + " meter/sec</td></tr>"
                    +"<tr><th>Wind direction</th><td>" + direction + " </td></tr>";

            $('tbody').html(temp );

        },
            error: function(){
                alert(erroe);
            }
        });

});
});

/*{"coord":{"lon":-0.13,"lat":51.51},
    "weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
    "base":"stations",
    "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},
    "visibility":10000,
    "wind":{"speed":4.1,"deg":80},
    "clouds":{"all":90},
    "dt":1485789600,
    "sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},
    "id":2643743,
    "name":"London",
    "cod":200}*/
