import { getPopup } from '@resources/preload'

import store from './store'

export const showPopup = (
  component,
  props = {},
  clickBgToClose = true,
) => {
  store.commit('popup/setPopup', { component, props, clickBgToClose })
}

export const closePopup = () => {
  store.commit('popup/clearPopup')
}

export const pluginPopup = {
  install(Vue) {
    Vue.prototype.$showPopup = (
      fullName,
      props = {},
      clickBgToClose = true,
    ) => {
      const [key, name] = fullName.split('/')
      const popup = getPopup(key, name)

      showPopup(popup, props, clickBgToClose)
    }
  },
}
