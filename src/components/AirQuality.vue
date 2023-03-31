<template>
  <section className="air-quality">
    <h2 className="title">
      <img src="/assets/leaf.svg" alt="icone de folha" />
      Qualidade do ar
    </h2>
    <p className="good" :style="{color: color}">{{AirQualityParam}}</p>
    <p className="number" >{{ $store.state.weather_poluition.list[0].components.o3.toFixed() }}</p>
    <div className="info">
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.pm2_5.toFixed(1) }}</p>
        <small>PM2.5</small>
      </div>
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.pm10.toFixed(1) }}</p>
        <small>PM10</small>
      </div>
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.so2.toFixed(1) }}</p>
        <small>SO₂</small>
      </div>
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.no2.toFixed(1) }}</p>
        <small>NO₂</small>
      </div>
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.o3.toFixed(1) }}</p>
        <small>O₃</small>
      </div>
      <div className="number">
        <p>{{ $store.state.weather_poluition.list[0].components.co .toFixed(1)}}</p>
        <small>CO</small>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return{
      arq: this.$store.state.weather_poluition.list[0].components.o3,
      color: '#86ebcd'
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    AirQualityParam() {
      if(this.arq < 40 ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = '#86ebcd'
        return 'Boa'
      } else if (this.arq > 41 || this.arq < 80) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = '#daeb86'
        return 'Moderada'
      } else if (this.arq > 81 || this.arq < 120) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = '#eeba7a'
        return 'Ruim'
      } else if (this.arq > 121 || this.arq < 200) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = '#ee7a7a'
        return 'Muito Ruim'
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = '#54175f'
        return 'Péssima'
      }
    }
  }  
}
</script>

<style scoped >
.air-quality {
  font-family: 700;
  text-align: center;
  display: grid;
}
.air-quality .good {
  margin-top: 3.2rem;
  font-size: 1.8rem;
  color: #86ebcd;
}
.air-quality>.number {
  margin-top: 0.4rem;
  font-size: 4rem;
  color: #e7e6fb;
}
.air-quality .info {
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
  padding: 0 1.6rem 1.6rem;
  margin-bottom: 2rem;
}
.air-quality .info .number {
  flex: 1;
}
.air-quality .info p {
  color: #86ebcd;
  font-size: 1.2rem;
}
.air-quality .info small {
  font-size: 1.2rem;
  color: #e7e6fb;
}
</style>