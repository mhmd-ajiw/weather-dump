// key : af7748e9c898589c1b90c5ae09f95847
const inputCity = document.getElementById('city-input')
const btnSearch = document.getElementById('search-btn');
const wthRes = document.getElementById('weather-result');
const cityRes = document.getElementById('city-name');
const tempRes = document.getElementById('temperature');
const descripRes = document.getElementById('description');

const api_key = 'af7748e9c898589c1b90c5ae09f95847';

async function ambilDataCuaca(name_city){
    try {
        console.log('Sedang mengambil data...');
        inputCity.textContent = '';

        const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name_city}&appid=af7748e9c898589c1b90c5ae09f95847&units=metric`);

        const dataCuaca = await respons.json();
        console.log(dataCuaca);
    } catch(error) {
        console.log('Pengambilan data gagal.');
    }
}

btnSearch.addEventListener('click', function() {
    const name_city = inputCity.value.toLowerCase();
    ambilDataCuaca(name_city);
    
});