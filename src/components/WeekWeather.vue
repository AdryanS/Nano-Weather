<!-- eslint-disable vue/no-use-computed-property-like-method -->
<!-- eslint-disable no-constant-condition -->
<!-- eslint-disable vue/return-in-computed-property -->
<template>
  <section className="week-weather">
    <div className="day" v-for="weak, index in $store.state.weather_forecast.list.slice(0, 4)" :key="index">
      <h4 className="title">
        {{ 
        semana[d.getDay() + index]
      }}
        </h4>
      <img :src="`https://openweathermap.org/img/wn/${weak.weather[0].icon}@2x.png`" alt="" />
      <p className="maxmin">
        {{ weak.main.temp_max.toFixed() }}° <span>{{ weak.main.temp_min.toFixed()}}°</span>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      semana: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
      d: new Date(),
    }
  },
}

</script>

<style scoped>
.week-weather {
  padding: 4rem;
  display: flex;
  gap: 1.2rem;
}

.day {
  flex: 1;
  display: grid;
  justify-items: center;
  gap: 1.6rem;
}

.day>img {
  width: 3.2rem;
  height: 3.2rem;
}

h4.title {
  font-size: 1.4rem;
  color: #dad8f7;
}

.day .maxmin {
  font-weight: 700;
  color: #ffffff;
  font-size: 1.6rem;
}

.day .maxmin span {
  color: #C2BFF4;
}</style>