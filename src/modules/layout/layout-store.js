export default {
  namespaced: true,
  state: {
    isLinksBlocked: false,
  },
  mutations: {
    setLinksBlocked(state, value) {
      state.isLinksBlocked = value
    },
  },
}
