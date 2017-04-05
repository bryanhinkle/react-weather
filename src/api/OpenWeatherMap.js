//var axios = require('axios');
import axios from 'axios-es6';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=27dbabfe89ab6ac4d90bc3f3f20d4a3a&units=imperial';

export function getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }


//module.exports = OpenWeatherMap;
// 27dbabfe89ab6ac4d90bc3f3f20d4a3a
