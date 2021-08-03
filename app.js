const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=a26ee778e3ffc700b15f5c9d04536397&query=-75.7888,44.1545&units=f'

// request({ url: url, json: true}, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather server')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]} It is currentry ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(44.1545, -75.7888, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})