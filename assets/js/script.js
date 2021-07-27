
let btnPrimary = document.querySelector('.btn-primary');

const apiKey = '8cb2238a37cf037e6cb64bd1b66f4f0a';


function myFunction() {
    let cityName = document.querySelector('#cityname').value;

    fetch(
        'api.openweathermap.org/data/2.5/forecast?' +
        cityName + 
        '8cb2238a37cf037e6cb64bd1b66f4f0a'
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.data);


        let responseContainer = document.querySelector('#response-container');

        responseContainer.innerHTML = '';
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data);

        responseContainer.appendChild(gifImg);
    });
}
    btnPrimary.addEventListener('click', myFunction);