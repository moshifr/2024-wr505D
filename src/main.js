import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/base.css'

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)

const pinia  = createPinia()
pinia.use(piniaPluginPersistedstate)

new Vue({
  pinia,
  router,
  render: (h) => h(App)
}).$mount('#app')
