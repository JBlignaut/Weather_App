const url ='https://api.openweathermap.org/data/2.5/weather';
const apiKey ='f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function(){
    defaultweatherFin('Johannesburg');
    weatherFin('');
});

async function defaultweatherFin(city){
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
    // Create a new weather card
    const weatherCard = `
        <div class="animate_A animate_fadeIn w_info">
            <h3>${data.name}</h3>
            <p>${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
            <p>${data.main.temp} &deg;C</p>
            <p>${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
    
    // Append the new card to the container
    $('#weather_cards_container').append(weatherCard);
}

async function weatherFin(city){
    const temp = `${url}?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res = await fetch(temp);
        const data = await res.json();
        if(res.ok){
            weatherShowFin(data); // Call to add a new card
        }else{
            alert('City not found. \n Please try again');
        }
    } catch(err){
        console.error('Error fetching weather data: ', err);
    }
}