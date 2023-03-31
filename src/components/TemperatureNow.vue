<template>
    <section className="temperature-now">
        <div className="location">
            <img src="/assets/pin.svg" alt="" />
            <strong>{{ $store.state.weather_info.name }} - {{ $store.state.weather_info.sys.country }}</strong>
        </div>
        <div className="temp">
            <div className="number">
                {{ $store.state.weather_info.main.temp.toFixed() }}
                <div className="maxmin">
                    {{ $store.state.weather_info.main.temp_max.toFixed() }}°{{ " " }}
                    <span>{{ $store.state.weather_info.main.temp_min.toFixed() }}°</span>
                </div>
            </div>
            <div className="celsius">°C</div>
        </div>
        <div className="statistics">
            <div className="stats">
                <img src="/assets/temp-wind.svg" alt="icone de vento" />
                <div className="info">
                    <p>Vento</p>
                    <h5>
                        {{ $store.state.weather_info.wind.speed.toFixed() }} <span>km/h</span>
                    </h5>
                </div>
            </div>
            <div className="stats">
                <img src="/assets/temp-humidity.svg" alt="icone de vento" />
                <div className="info">
                    <p>Umidade</p>
                    <h5>
                        {{ $store.state.weather_info.main.humidity.toFixed() }} <span>%</span>
                    </h5>
                </div>
            </div>
            <div className="stats">
                <img src="/assets/temp-rain.svg" alt="icone de vento" />
                <div className="info">
                    <p>Chuva</p>
                    <h5>
                        {{  $store.state.weather_info.clouds.all.toFixed() }} <span>%</span>
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.temperature-now {
    background: url("/assets/bg-temperature-now.jpg") no-repeat center;
    background-size: cover;
    position: relative;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
}

.temperature-now::before {
    content: "";
    width: 17.6rem;
    height: 17.6rem;
    background: url("/assets/clouds.svg") no-repeat;
    background-size: cover;
    position: absolute;
    top: -5.6rem;
    left: -5.6rem;
}

.location {
    justify-self: end;
    padding: 3.2rem 3.2rem 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.location img {
    width: 2.0rem;
    height: 2.0rem;
}

.location strong {
    font-weight: 700;
    font-size: 1.4rem;
    color: #c2bff4;
}

.temp {
    margin: 6rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    gap: 0.4rem;
}

.temp .number {
    text-align: center;
    font-size: 8.8rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.temp .number .maxmin {
    font-size: 2rem;
}

.temp .number .maxmin span {
    color: #c2bff4;
}

.celsius {
    font-size: 2.4rem;
    color: #dad8f7;
    margin-top: 1.5rem;
}

.statistics {
    padding: 1.2rem;
    display: flex;
    gap: 0.8rem;
}

.stats {
    flex: 1;
    padding: 1.2rem 1.6rem;
    background: rgba(102, 96, 200, 0.6);
    border-radius: 0.6rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.stats img {
    width: 3.2rem;
    height: 3.2rem;
}

.stats .info {
    color: #e7e6fb;
}

.stats .info h5 span,
.stats .info p {
    font-size: 1.2rem;
}

.stats .info h5 {
    font-size: 1.8rem;
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
}
</style>