
let btnPrimary = document.querySelector('.btn-primary');

const apiKey = '8cb2238a37cf037e6cb64bd1b66f4f0a';

function myFunction() {
    let cityName = document.querySelector('#cityname').value;

    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        cityName +
        '&appid=8cb2238a37cf037e6cb64bd1b66f4f0a'
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        let responseContainer = document.querySelector('#response-container');
    });
}
    btnPrimary.addEventListener('click', myFunction);