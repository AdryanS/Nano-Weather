export interface TWeatherInfoPosition {
  name: string
  local_names: {
    en: string
    ru: string
    zh: string
  }
  lat: ICoords['lat']
  lon: ICoords['lon']
  country: string
  state: string
  admin1: string
  admin2: string
  timezone: string
  population: number
  id: number
}

export interface IWeatherInfoMain {
  coord: ICoords
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export interface IWeatherInfoPoluition {
  coord: ICoords
  list: [
    {
      main: {
        aqi: number
      }
      components: {
        co: number
        no: number
        no2: number
        o3: number
        so2: number
        pm2_5: number
        pm10: number
        nh3: number
      }
      dt: number
    }
  ]
}

export interface IWeatherInfoForecast {
  cod: string
  message: number
  cnt: number
  list: [
    {
      dt: string
      main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
      }
      weather: [
        {
          id: number
          main: string
          description: string
          icon: string
        }
      ]
      clouds: {
        all: number
      }
      wind: {
        speed: number
        deg: number
        gust: number
      }
      visibility: number
      pop: number
      sys: {
        pod: number
      }
      dt_txt: string
    }
  ]
  city: {
    id: number
    name: string
    coord: ICoords
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface ICoords {
  lat: number
  lon: number
}
