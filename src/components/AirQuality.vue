<template>
  <section className="air-quality">
    <h2 className="title">
      <img src="/assets/leaf.svg" alt="icone de folha" />
      Qualidade do ar
    </h2>
    <p className="good">Boa</p>
    <p className="number">21</p>
    <div className="info">
      <div className="number">
        <p>12.9</p>
        <small>PM2.5</small>
      </div>
      <div className="number">
        <p>12.9</p>
        <small>PM10</small>
      </div>
      <div className="number">
        <p>2.1</p>
        <small>SO₂</small>
      </div>
      <div className="number">
        <p>1.4</p>
        <small>NO₂</small>
      </div>
      <div className="number">
        <p>21.2</p>
        <small>O₃</small>
      </div>
      <div className="number">
        <p>0.7</p>
        <small>CO</small>
      </div>
    </div>
  </section>
</template>

<style>
.air-quality {
  font-family: 700;
  text-align: center;
  display: grid;
}

h2.title {
  font-size: 1.6rem;
  color: #dad8f7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 3.2rem;
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
}

.air-quality .info .number {
  flex: 1;
}

.air-quality .info p {
  color: #86ebcd;
  font-size: 1.4rem;
}

.air-quality .info small {
  font-size: 1.2rem;
  color: #e7e6fb;
}
</style>