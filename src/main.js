import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar/lib/components/calendar.umd'
import VDatePicker from 'v-calendar/lib/components/date-picker.umd'


Vue.config.productionTip = false

Vue.component('v-calendar', VCalendar)
Vue.component('v-date-picker', VDatePicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
