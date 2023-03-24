import axios from 'axios';

const data = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

const geo = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0/'
})

export {geo, data}