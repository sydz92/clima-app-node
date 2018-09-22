/**
 * clima.js
 */

const axios = require('axios');

const getClima = async(lat, lon) => {

    let encodeLat = encodeURI(lat);
    let encodeLon = encodeURI(lon);
    let key = 'YOUR_KEY';

    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeLat}&lon=${encodeLon}&units=metric&appid=${key}`);

    return result.data.main.temp;
}

module.exports = {
    getClima
}