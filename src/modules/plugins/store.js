import Vue from 'vue'
import Vuex from 'vuex'

import lang from '@resources/lang-store'
import popup from '@popup/popup-store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    lang,
    popup,
  },
})
