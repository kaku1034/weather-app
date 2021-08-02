const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=a26ee778e3ffc700b15f5c9d04536397&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather server')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]} It is currentry ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
    }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FrdTAyMDEiLCJhIjoiY2tydGZidHV1MTY0YTJ2bGV2M2l1NGx5NyJ9.HH5gj0j4xpx7iUB9oncDzQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location server!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
})