/**
 * app.js
 */

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirrección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coords = await lugar.getLugarLatLon(direccion);
        let temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima en ${coords.direccion} es de ${temp} grados celcius`

    } catch (error) {

        return `No se pudo determinar el clima en ${direccion}.`

    }



}


getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));