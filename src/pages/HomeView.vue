<template>
  <head>
    <link rel="shortcut icon" :href="FavIcon" type="image/svg+xml">
    <title>Nano Weather</title>
  </head>
  <div v-if="haveLocation">
    <nav className="nav-location">
      <div className="set-location">
        <h2 className="title">Sua localização</h2>
        <input @keypress="setKeyDown" v-model="location" type="text" name="local" id="local"
          placeholder="Digite sua cidade" />
        <div v-if="haveLocationData" v-for="ForLocation, index in weather_info_location">
          <button className="city" :key="index" v-on:click="setLocation(ForLocation)">
            <p>{{ ForLocation.name }} - {{ ForLocation.country }} <br /> {{ ForLocation.state }}</p>
          </button>
        </div>
      </div>
    </nav>
  </div>
  <main>
    <TemperatureNow :name="weather_info.name" :country="weather_info.sys.country" :temp="weather_info.main.temp"
      :temp_max="weather_info.main.temp_max" :humidity="weather_info.main.humidity" :speed="weather_info.wind.speed"
      :clouds="weather_info.clouds.all" :temp_min="weather_info.main.temp_min" />
    <AirQuality />
    <SunTime :sunrise-props="weather_info.sys.sunrise" :sunset-props="weather_info.sys.sunset"
      :timezone-hours="timezone" />
    <WeekWeather />
  </main>
  <footer>
    <div class="set-location-menu" v-on:click="setMenuOpen">
      <img src="/assets/pin.svg" alt="mude sua localizaçao">
    </div>
  </footer>
</template>

<script lang="ts">
import TemperatureNow from "../components/TemperatureNow.vue";
import AirQuality from "../components/AirQuality.vue";
import SunTime from "../components/SunTime.vue";
import WeekWeather from "../components/WeekWeather.vue";

import axios from 'axios';

export default {
  data() {
    return {
      location: "Brasília",
      latlon: {
        lat: -15.71836875,
        lon: -47.99502730353181,
      },
      haveLocation: false,
      haveLocationData: false,
      api_key: "815da7cb57ed5e00c7f9ebed81a94dfe",
      timezone: 0,
      weather_info_location: [{
        name: null,
        country: null,
        state: null
      }],
      info_poluition: {
        coord: {
          lon: -47.995,
          lat: -15.7184
        },
        list: [
          {
            main: {
              aqi: 1
            },
            components: {
              co: 317.1,
              no: 1.62,
              no2: 12.85,
              o3: 1.01,
              so2: 1.4,
              pm2_5: 3.83,
              pm10: 10.59,
              nh3: 1.44
            },
            dt: 1679445120
          }
        ]
      },
      weather_info: {
        name: "",
        dt: 0,
        timezone: 0,
        coord: {
          lat: 0,
          lon: 0,
        },
        clouds: {
          all: 0,
        },
        main: {
          temp: 0,
          temp_max: 0,
          temp_min: 0,
          feels_like: 0,
          humidity: 0,
          pressure: 0,
        },
        wind: {
          speed: 0,
        },
        sys: {
          country: "",
          sunrise: 0,
          sunset: 0,
        },
      },
    }
  },
  components: {
    TemperatureNow,
    AirQuality,
    SunTime,
    WeekWeather
  },
  methods: {
    async getWeatherApi() {
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latlon.lat}&lon=${this.latlon.lon}&appid=${this.api_key}&units=metric`)
        .then(res => this.weather_info = res.data)

      this.timezone = this.weather_info.timezone / 3600
    },
    async getLocationApi() {
      await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${this.location}&limit=5&appid=${this.api_key}&units=metric`)
        .then(res => this.weather_info_location = res.data)

      this.haveLocationData = true
    },
    async getAirPoluition() {
      await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.weather_info.coord.lat}&lon=${this.weather_info.coord.lon}&appid=${this.api_key}&units=metric`)
        .then(res => this.info_poluition = res.data.list[0])
    },
    // async setForecast() {
    //   await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.weather_info.coord.lat}&lon=${this.weather_info.coord.lon}&appid=${this.api_key}&units=metric`)
    //     .then(res => console.log(res.data.list.slice(0, 5)))
    // },
    setLocation(param: any) {
      this.latlon.lat = param.lat;
      this.latlon.lon = param.lon;

      this.getWeatherApi();
      this.setMenuOpen()
      this.getAirPoluition()
    },
    setMenuOpen() {
      if (this.haveLocation == true) {
        this.haveLocation = false
      } else {
        this.haveLocation = true
      }
    },
    setKeyDown(event: KeyboardEventInit) {
      if (event.key == "Enter") {
        this.getLocationApi()
      }
    },
    setApi() {
      this.getWeatherApi()
      this.getAirPoluition()

      setInterval(() => {
        this.getWeatherApi()
        this.getAirPoluition()
      }, 1000 * 60 * 5)
    },
  },
  created() {
    this.setApi()
  },
  computed: {
    FavIcon() {
      return `/assets/clouds.svg`
    }
  }
}
</script>