// Declaration of Variables
let nameEl = document.querySelector('.name');
let tempEl = document.querySelector('.temp');
let windEl = document.querySelector('.wind');
let humidityEL = document.querySelector('.humidity');
let searchBtnEl = document.querySelector('.btn-primary');

// API Key
const apiKey = '8cb2238a37cf037e6cb64bd1b66f4f0a';

function myWeather() {
    // Fetch request to Open Weather Map API
    let cityName = document.querySelector('#cityname').value;
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&appid=' +
        apiKey
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let windValue = data['wind']['speed'];
        let humidityValue = data['main']['humidity'];
        let currentDate = new Date().toLocaleDateString()
        
        // Display current date and weather conditions
        nameEl.innerHTML = nameValue + " " + currentDate; 
        tempEl.innerHTML = "Temp: " + tempValue + " " + "&#x2103;";
        windEl.innerHTML = "Wind: " + windValue + " " + "MPH";
        humidityEL.innerHTML = "Humidity: " + humidityValue + " " + "&#x25;" ;
    })
    .catch(function(err) {
        alert('Please search a valid city!');
    })

    // Five Day Forecast
    let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey;
    .then(function(response) {
        console.log(forecastURL);

        const forecastEl = document.querySelectorAll('forecast');
    })
}

    
    searchBtnEl.addEventListener('click', myWeather)


    