// Declaration of Variables
let nameEl = document.querySelector('.name');
let iconEl = document.querySelector('.icon');
let tempEl = document.querySelector('.temp');
let windEl = document.querySelector('.wind');
let humidityEL = document.querySelector('.humidity');
let uvEl = document.querySelector('.uv');
let searchBtnEl = document.querySelector('.btn-primary');

// API Key
const apiKey = '8cb2238a37cf037e6cb64bd1b66f4f0a';

function myWeather() {
    // Fetch request to Open Weather Map API
    let cityName = document.querySelector('#cityname').value;
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&units=metric' +
        '&appid=' +
        apiKey
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // Parse data to display current date and conditions
        const currentDate = new Date(data.dt*1000);
        console.log(currentDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        // let weatherIcon = data.weather[0].icon;
        // iconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
        // iconEl.setAttribute("alt", data.weather[0].description);
        nameEl.innerHTML = data.name + " (" + month + "/" + day + "/" + year + ") ";
        tempEl.innerHTML = "Temp: " + data.main.temp + " " + "&#x2103;";
        windEl.innerHTML = "Wind: " + data.wind.speed  + " " + "MPH";
        humidityEL.innerHTML = "Humidity: " + data.main.humidity + " " + "&#x25;" ;
    })
    // Query to retrieve UV index
    return fetch(
                'https://api.openweathermap.org/data/2.5/uvi/forecast?lat=' + lat + '&lon=' + 
                lon + '&appid=' + apiKey + '&cnt=1'
    )
    .then(function(data) {
        console.log(data);
        
        // uvEl.innerHTML = "UV Index: " + data.

    })
}
    searchBtnEl.addEventListener('click', myWeather)


    