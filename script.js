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
        console.log('Mengambil data...');

        const respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name_city}&appid=${api_key}&units=metric`);

        if (!respons.ok) {
          throw new Error("Kota tidak ditemukan");
        }

        const dataCuaca = await respons.json();
        console.log(dataCuaca);
        console.log('Berhasil.');

        cityRes.textContent = dataCuaca.name;
        tempRes.textContent = `${dataCuaca.main.temp} °C`;
        descripRes.textContent = dataCuaca.weather[0].description;

        wthRes.style.display = "block";
        inputCity.value = "";
    } catch(error) {
        console.log("Pengambilan data gagal:", error.message);
        alert("Nama kota tidak tersedia atau periksa koneksi internetmu.");

        wthRes.style.display = "none";
    }
}

btnSearch.addEventListener('click', function() {
   const name_city = inputCity.value.trim().toLowerCase();

   if (name_city === "") {
     alert("Silakan masukkan nama kota terlebih dahulu.");
     return;
   }

   ambilDataCuaca(name_city);
});