<template>
    <head>
      <link rel="icon" :href="`https://openweathermap.org/img/wn/${$store.state.weather_forecast.list[0].weather[0].icon}@2x.png`">
      <title>Nano-Weather</title>
    </head>
  <div v-if="haveLocation">
    <nav className="nav-location">
      <div className="set-location">
        <h2 className="title">Sua localização</h2>
        <input @keypress="setKeyDown" v-model="location" type="text" name="local" id="local"
          placeholder="Digite sua cidade" />
        <div v-for="ForLocation, index in $store.state.weather_position " :key="index">
          <button className="city" :key="index" v-on:click="setLocation(ForLocation)">
            <p>{{ ForLocation.name }} - {{ ForLocation.country }} <br /> {{ ForLocation.state }}</p>
          </button>
        </div>
      </div>
    </nav>
  </div>
  <main>
    <TemperatureNow />
    <AirQuality />
    <SunTime 
      :sunriseProps="$store.state.weather_info.sys.sunrise" 
      :sunsetProps="$store.state.weather_info.sys.sunset"
      :timezoneHours="$store.state.weather_info.timezone" 
    />
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

import { weather, location } from '@/config/axiosConfig';

import type {
  ICoords
} from "@/types/weatherTypes";

export default {
  data() {
    return {
      location: "Brasília",
      latlon: { lat: -15.71836875, lon: -47.99502730353181 } as ICoords,
      haveLocation: true,
      locationMenu: [this.$store.state.weather_position]
    }
  },
  components: {
    TemperatureNow,
    AirQuality,
    SunTime,
    WeekWeather
  },
  methods: {
    async getApiLocation() {
      await location.get(`direct?q=${this.location}&limit=5&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        .then((res) => this.$store.commit('setApiLocation', res.data))
    },

    async setAPiWeather() {
      await weather.get(`weather?lat=${this.latlon.lat}&lon=${this.latlon.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        .then(res =>  this.$store.commit('setInfo', res.data))

      await weather.get(`air_pollution?lat=${this.latlon.lat}&lon=${this.latlon.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        .then(res =>  this.$store.commit('setPoluition', res.data))

      await weather.get(`forecast?lat=${this.latlon.lat}&lon=${this.latlon.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=pt_br`)
        .then(res =>  this.$store.commit('setForecast', res.data))

        console.log(this.$store.state)
    },

    setLocation(param: any) {
      this.latlon.lat = param.lat;
      this.latlon.lon = param.lon;

      this.setMenuOpen()

      this.setAPiWeather()
    },

    setMenuOpen() {
      if (this.haveLocation == true) {
        this.haveLocation = false
      } else {
        this.haveLocation = true
      }
    },
    setKeyDown(event: KeyboardEvent) {
      if (event.key == "Enter") {
        this.getApiLocation()
      }
    },
  },
  created() {
    this.setAPiWeather()
  }
}
</script>