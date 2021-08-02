// Declaration of Variables
let nameEl = document.querySelector('.name');
let iconEl = document.querySelector('.icon');
let tempEl = document.querySelector('.temp');
let windEl = document.querySelector('.wind');
let humidityEL = document.querySelector('.humidity');
let uvEl = document.querySelector('.uv');
let uvIndexEl = document.querySelector('.uvIndex')
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
        
        // Fetch request to retrieve UV index
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        return fetch(
            'https://api.openweathermap.org/data/2.5/uvi/forecast?lat=' +
            lat + '&lon=' + lon +
            '&appid=' + apiKey + '&cnt=1'
        )
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        uvIndexEl.innerHTML = data[0].value
        uvEl.innerHTML = "UV Index: ";
        uvEl.appendChild(uvIndexEl);

        // Fetch request for 5-Day Forecast
        return fetch(
            'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric' + "&appid=" + apiKey
        )
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const forecastEl = document.querySelectorAll('.forecast');
        // Parse data to display 5-Day Forecast
        for (i = 0; i < forecastEl.length; i++) {
            forecastEl[i].innerHTML= "";
            const forecastIndex = i*8 + 5;
            const forecastDateEl = document.createElement('p');
            const forecastIconEl = document.createElement('img');
            const forecastTempEl = document.createElement('p');
            const forecastWindEl = document.createElement('p');
            const forecastHumidityEl = document.createElement('p');
            const forecastDate = new Date(data.list[forecastIndex].dt * 1000);
            const forecastDay = forecastDate.getDate();
            const forecastMonth = forecastDate.getMonth() + 1;
            const forecastYear = forecastDate.getUTCFullYear();
            
            forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
            forecastEl[i].append(forecastDateEl);
            forecastIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[forecastIndex].weather[0].icon + "@2x.png");
            forecastIconEl.setAttribute("alt", data.list[forecastIndex].weather[0].description);
            forecastEl[i].append(forecastIconEl);
            forecastTempEl.innerHTML = "Temp: " + (data.list[forecastIndex].main.temp) + " " + "&#x2103;";
            forecastEl[i].append(forecastTempEl);
            forecastWindEl.innerHTML = "Wind: " + (data.list[forecastIndex].wind.speed) + " " +  "MPH";
            forecastEl[i].append(forecastWindEl);
            forecastHumidityEl.innerHTML = "Humidity: " + (data.list[forecastIndex].main.humidity) + " " +  "&#x25;";
            forecastEl[i].append(forecastHumidityEl);
        }
    })
}
    searchBtnEl.addEventListener('click', myWeather)


    