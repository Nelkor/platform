export default {
  namespaced: true,
  state: {
    component: null,
    props: {},
    clickBgToClose: true,
  },
  mutations: {
    setPopup(state, { component, props, clickBgToClose }) {
      state.component = component
      state.props = props
      state.clickBgToClose = clickBgToClose
    },
    clearPopup(state) {
      state.component = null
      state.props = {}
    },
  },
}
