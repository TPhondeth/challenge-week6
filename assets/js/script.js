// Declaration of Variables
let name = document.querySelector('.name');
let temp = document.querySelector('.temp');
let wind = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');
let uv = document.querySelector('.uv');
let btnPrimary = document.querySelector('.btn-primary');

// API Key
const apiKey = '8cb2238a37cf037e6cb64bd1b66f4f0a';

function myWeather() {
    let cityName = document.querySelector('#cityname').value;
    
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&appid=8cb2238a37cf037e6cb64bd1b66f4f0a&units=metric'
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let windValue = data['wind']['speed'];
        let humidityValue = data['main']['humidity'];
        

        name.innerHTML = nameValue;
        temp.innerHTML = "Temp: " + tempValue + " " + "&#x2103;";
        wind.innerHTML = "Wind: " + windValue + " " + "MPH";
        humidity.innerHTML = "Humidity: " + humidityValue + " " + "&#x25;" ;
    })
}
        btnPrimary.addEventListener('click', myWeather)


    