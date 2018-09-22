/**
 * lugar.js
 */

const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let key = 'YOUR_KEY';

    let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${key}&q=${encodeUrl}&format=json`);

    if (result.status === 401) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    name = result.data[0].display_name;
    lat = result.data[0].lat;
    lon = result.data[0].lon;

    return {
        direccion: name,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}