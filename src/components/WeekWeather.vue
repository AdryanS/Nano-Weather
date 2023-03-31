<template>
  <section className="week-weather">
    <div className="day">
      <h4 className="title">Amanhã</h4>
      <img src="/assets/weather-clouds.svg" alt="" />
      <p className="maxmin">
        21° <span>16°</span>
      </p>
    </div>
    <div className="day">
      <h4 className="title">Sexta</h4>
      <img src="/assets/weather-sun.svg" alt="" />
      <p className="maxmin">
        28° <span>20°</span>
      </p>
    </div>
    <div className="day">
      <h4 className="title">Sabado</h4>
      <img src="/assets/weather-rain.svg" alt="" />
      <p className="maxmin">
        28° <span>20°</span>
      </p>
    </div>
    <div className="day">
      <h4 className="title">Domingo</h4>
      <img src="/assets/weather-thunder.svg" alt="" />
      <p className="maxmin">
        28° <span>20°</span>
      </p>
    </div>
    <div className="day">
      <h4 className="title">Segunda</h4>
      <img src="/assets/weather-cloudy.svg" alt="" />
      <p className="maxmin">
        28° <span>20°</span>
      </p>
    </div>
  </section>
</template>

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