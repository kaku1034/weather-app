const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a26ee778e3ffc700b15f5c9d04536397&query=${latitude},${longitude}&units=f`
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather server', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, `${response.body.current.weather_descriptions[0]} It is currentry ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
        }
    })
}

module.exports = forecast