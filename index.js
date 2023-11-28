const axios = require("axios");
const appid = "ef0b0973b783e0614ac87612ec04344b";
const q = "São Caetano do Sul";
const units = "metric";
const lang = "pt_BR";
const limit = 1;

const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appid=${appid}`;
const coordenadas = axios.get(geoUrl).then((res) => [res.data[0].lat, res.data[0].lon]); // Obtem coordenadas

coordenadas.then(([lat, lon]) => {
    const tempUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&lang=${lang}&units=${units}`;
    const temperatura = axios.get(tempUrl).then((res) => res); // Obtem a sesação térmica e descrição
    temperatura.then((res) => console.log(`Sensação térmica: ${res.data.main.feels_like}\nDescrição: ${res.data.weather[0].description}`));
});