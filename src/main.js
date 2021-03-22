import Vue from 'vue'

import { preloadBasicResources } from '@resources/preload-basic'
import { pluginT } from '@plugins/translate'

import './main.scss'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(pluginT)

preloadBasicResources().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})
