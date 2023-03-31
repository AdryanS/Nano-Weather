import axios from 'axios';

const weather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: { 
        Accept: "application/json, text/plain, */*",
        'content-type': 'application/x-www-form-urlencoded'
     },
})

const location = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0',
    headers: { 
        Accept: "application/json, text/plain, */*",
        'content-type': 'application/x-www-form-urlencoded'
     },
})

export { weather, location }