import Vue from 'vue'

import { preloadBasicResources } from '@resources/preload-basic'

import { pluginT } from '@plugins/translate'
import router from '@plugins/router'
import store from '@plugins/store'

import './main.scss'

import App from './App'

Vue.config.productionTip = false

Vue.use(pluginT)

preloadBasicResources().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})
