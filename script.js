const container = document.querySelector('.container');
const search = document.querySelector('.searchbox button');
const searchInput = document.querySelector('.searchbox input');
const weatherBox = document.querySelector('.weatherbox');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    container.classList.add('open');
    api();
});

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        container.classList.add('open');
        api();
    }
});

function api(){
    const APIKey = "5c3d18b4f38b4c52bd7154613252203";
    const city = document.querySelector('.searchbox input').value;
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}`)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('.weatherbox img');
        img.src = data.current.condition.icon;
        const tempt = document.querySelector('.weatherbox .temperature').textContent = data.current.temp_c;
        const ket = document.querySelector('.weatherbox .keterangan').textContent = data.current.condition.text;
        const humadity = document.querySelector('.weather-details .humadity span').textContent = data.current.humidity + '%';
        const wind = document.querySelector('.weather-details .wind span').textContent = Math.floor(data.current.wind_kph) + 'Km/h';
    })
}
     
