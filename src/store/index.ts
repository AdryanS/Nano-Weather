import { createStore } from 'vuex'

export default createStore({
  state: {
    weather_info: {
      name: '',
      dt: 0,
      timezone: 0,
      coord: {
        lat: 0,
        lon: 0
      },
      clouds: {
        all: 0
      },
      main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0
      },
      wind: {
        speed: 0
      },
      sys: {
        country: '',
        sunrise: 0,
        sunset: 0
      }
    },
    weather_poluition: {
      coord: {
        lon: 0,
        lat: 0
      },
      list: [
        {
          main: {
            aqi: 0
          },
          components: {
            co: 0,
            no: 0,
            no2: 0,
            o3: 0,
            so2: 0,
            pm2_5: 0,
            pm10: 0,
            nh3: 0
          },
          dt: 0
        }
      ]
    },
    weather_position: [
      {
        name: 'Brasília',
        local_names: {
          en: '',
          ru: '',
          zh: ''
        },
        lat: 0,
        lon: 0,
        country: 'DF',
        state: 'Brasil',
        timezone: '',
        population: 0,
        id: 0
      }
    ],
    weather_forecast: {
      cod: '',
      message: 0,
      cnt: 0,
      list: [
        {
          dt: 0,
          main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            sea_level: 0,
            grnd_level: 0,
            humidity: 0,
            temp_kf: 0
          },
          weather: [
            {
              id: 0,
              main: '',
              description: '',
              icon: ''
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 0,
            deg: 0,
            gust: 0
          },
          visibility: 0,
          pop: 0,
          rain: {
            '3h': 0
          },
          sys: {
            pod: ''
          },
          dt_txt: ''
        }
      ],
      city: {
        id: 0,
        name: '',
        coord: {
          lat: 0,
          lon: 0
        },
        country: '',
        timezone: 0,
        sunrise: 0,
        sunset: 0
      }
    }
  },
  getters: {
  },
  mutations: {
    setApiLocation(state, data) {
      state.weather_position = data
    },
    setInfo(state, data) {
      state.weather_info = data
    },
    setPoluition(state, data) {
      state.weather_poluition = data
    },
    setForecast(state, data) {
      state.weather_forecast = data
    },
  },
  actions: {
  },
  modules: {
  }
})
