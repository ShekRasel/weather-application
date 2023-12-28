const apiKey = '6dac17b56db735916ae314337660957e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const input = document.querySelector('.js-search-input');
const searchBtn = document.querySelector('.js-search-btn');
const weather = document.querySelector('.js-image');
const search = document.querySelector('.js-search-input');


async function checkWeather(city){
    const response = await fetch(apiUrl+city + `&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather-info').style.display = 'none';
    }else{
        const data = await response.json();
    
        document.querySelector('.js-country').innerHTML = data.name;
        document.querySelector('.js-temp').innerHTML = Math.round(data.main.temp )+ '°C';
        document.querySelector('.js-humidity').innerHTML = data.main.humidity;
        document.querySelector('.js-wind').innerHTML = data.wind.speed + 'km/h';

        if(data.weather[0].main === 'Clear'){
            weather.src = "weather image/clear.png" ;
        }
        else if(data.weather[0].main === 'Mist'){
            weather.src = "weather image/mist.png"
        }
        else if(data.weather[0].main === 'Clouds'){
            weather.src = "weather image/clouds.png"
        }
        else if(data.weather[0].main === 'Rain'){
            weather.src = "weather image/rain.png"
        }
        else if(data.weather[0].main === 'Dizzle'){
            weather.src = "weather image/dizzle.png"
        }
        document.querySelector('.weather-info').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    }
        
};

searchBtn.addEventListener('click',()=>{
    checkWeather(input.value);
});

function keyHandle(event){
    if(event.key === 'Enter' ){
        checkWeather(input.value);
    }
};