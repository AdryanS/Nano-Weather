<template>
  <section className="sun-time">
    <h2 className="title">
      <img src="/assets/sun-time.svg" alt="icone de um sol dentro" />
      Horário do sol
    </h2>
    <div className="sun-chart-wrapper">
      <div className="sun-chart">
        <div className="chart">
          <img src="/assets/sun-chart.svg" alt="imagem de um grafico semi circulo com traços" />
        </div>
        <div className="now">{{setTime }}</div>
      </div>
    </div>
    <div className="time">
      <div className="sunrise">{{ setSunrise }}</div>
      <div className="sunset">{{ setSunset }}</div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      timeNow: "--:--:--",
      sunrise: this.$props.sunriseProps,
      sunset: this.$props.sunsetProps,
      timezone: this.$props.timezoneHours,
      sunriseF: "--:--:--",
      sunsetF: "--:--:--",
    }
  },
  methods: {
    setHourNow() {
      let time = new Date();
      let timeF = (time.setHours((time.getUTCHours() + this.timezoneHours)))
      
      this.timeNow = new Date(timeF).toLocaleTimeString('br', {
        hour: "2-digit",
        minute: '2-digit',
        second: '2-digit',
      })


    },
    formatSunrise(data:any) {
      this.sunriseF = data.toLocaleTimeString('br', { hour: "2-digit", minute: "2-digit" })
    },
    formatSunset(data:any) {
      this.sunsetF = data.toLocaleTimeString('br', { hour: "2-digit", minute: "2-digit"})
    },
  },
  mounted() {
    setInterval(this.setHourNow, 1000)
  },
  watch: {
    sunriseProps(newVal, oldVal) {
      if(newVal){
        const data = new Date(newVal * 1000)

        this.formatSunrise(data);
      }; 
    },
    sunsetProps(newVal, oldVal ) {
      if(newVal){
        const data = new Date(newVal * 1000)

        this.formatSunset(data);
      }; 
    },
  },
  props: ['sunriseProps', 'sunsetProps', 'timezoneHours'],
  computed: {
    setTime() {
      return  `${this.timeNow}`
    },
    setSunrise() {
      return `${this.sunriseF}`
    },
    setSunset() {
      return `${this.sunsetF}`
    },
  }
}
</script>

<style scoped>
.sun-chart-wrapper {
  position: relative;
  margin-top: 4rem;
  height: 11rem;
}

.sun-chart {
  --pos-x: 80;
  margin: auto;
  width: 21.6rem;
  height: 21.6rem;
  position: relative;
}

.sun-chart::before {
  content: "";
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  background-color: #f6c833;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: -0.6rem;
  transform: rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180))) translate(10.6rem);
}

.chart {
  width: 21.6rem;
  height: 10.8rem;
  overflow: hidden;
}

.chart::before {
  content: "";
  width: 21rem;
  height: 21rem;
  display: block;
  border-radius: 50%;
  background: linear-gradient(180deg,
      rgba(251, 219, 96, 0.2) 0%,
      rgba(251, 219, 96, 0) 101.89%);
  --mask: linear-gradient(0deg, #ffffff 50%, transparent 0%);
  mask: var(--mask);
  -webkit-mask: var(--mask);
  rotate: calc(1.825deg * var(--pos-x));
}

.chart img {
  position: absolute;
  top: 0;
  left: -1%;
  width: 21.6rem;
  height: 11.2rem;
}

div.now {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
}

.time {
  font-size: 1.2rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem auto 0;
  padding: 0 1.6rem 1.6rem;
  max-width: 27.6rem;
  margin-bottom: 2rem;
}
</style>