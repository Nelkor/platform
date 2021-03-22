import store from '@/store'

export const T = store.getters['lang/text']

export const pluginT = {
  install(Vue) {
    Vue.prototype.$T = T
  },
}
