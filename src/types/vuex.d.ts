import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { IWeatherInfoForecast, IWeatherInfoMain, IWeatherInfoPoluition, TWeatherInfoPosition} from './weatherTypes';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    weather_info: IWeatherInfoMain,
    weather_forecast: IWeatherInfoForecast,
    weather_poluition: IWeatherInfoPoluition,
    weather_position: TWeatherInfoPosition[],
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}