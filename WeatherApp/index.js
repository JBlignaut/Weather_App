const url ='https://api.openweathermap.org/data/2.5/weather';
const apiKey ='f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function(){
    weatherFin('Johannesburg');
});

async function weatherFin(city){
    const temp = `${url}?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res = await fetch(temp);
        const data = await res.json();
        if(res.ok){
            weatherShowFin(data);
        }else{
            alert('City not found. \n Please try again');
        }
    } catch(err){
        console.error('Error fetching weather data: ', err);
    }
}

function weatherShowFin(data){
    $('#city_name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temp').html(`${data.main.temp} &deg;C`);
    $('#description').text(data.weather[0].description);
    $('#wind_speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather_icon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    $('#w_info').fadeIn();
}