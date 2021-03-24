import store from '@plugins/store'

export const T = store.getters['lang/text']

export const pluginT = {
  install(Vue) {
    Vue.prototype.$T = T
  },
}
