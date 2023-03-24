<template>
  <section className="air-quality">
    <h2 className="title">
      <img src="/assets/leaf.svg" alt="icone de folha" />
      Qualidade do ar
    </h2>
    <p className="good">{{ airQualityText }}</p>
    <p className="number"> {{ info_poluition.main.aqi }} </p>
    <div className="info">
      <div className="number">
        <p>{{ info_poluition.components.pm2_5 }}</p>
        <small>PM2.5</small>
      </div>
      <div className="number">
        <p>{{ info_poluition.components.pm10 }}</p>
        <small>PM10</small>
      </div>
      <div className="number">
        <p>{{ info_poluition.components.so2 }}</p>
        <small>SO₂</small>
      </div>
      <div className="number">
        <p>{{ info_poluition.components.no2 }}</p>
        <small>NO₂</small>
      </div>
      <div className="number">
        <p>{{ info_poluition.components.o3 }}</p>
        <small>O₃</small>
      </div>
      <div className="number">
        <p>{{ info_poluition.components.co }}</p>
        <small>CO</small>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  data() {
    return {
      info_poluition: {
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
      },
      airQualityW: {
        main: this.$props.main,
        components: this.$props.components
      },
    }
  },
  watch: {
    airQualityW: {
      handler() {
        console.log(this.airQualityW)
      },
      deep: true
    }
  },
  props: ["main", "components"],
  computed: {
    airQualityText() {
      switch (this.info_poluition.main.aqi) {
        case 1:
          return 'Boa'
        default:
          return 'Ruim'
      }
    }
  },
  methods: {
    in( ) {}
  },
  unmounted() {
    this.in()
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