import Vue from 'vue'

import { preloadBasicResources } from '@resources/preload-basic'

import './main.scss'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

preloadBasicResources().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})
