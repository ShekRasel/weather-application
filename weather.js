const apiKey = '6dac17b56db735916ae314337660957e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Bangladesh';

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
};
checkWeather();