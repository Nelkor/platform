import { getDictionary } from './resources-api'

export default {
  namespaced: true,
  state: {
    currentLang: '',
    changingFor: '',
    dictionaries: {},
  },
  mutations: {
    setDictionary(state, { lang, key, dictionary }) {
      const langDictionary = state.dictionaries[lang] || {}

      state.dictionaries = {
        ...state.dictionaries,
        [lang]: { ...langDictionary, [key]: dictionary },
      }
    },
    setCurrentLang(state, value) {
      state.currentLang = value
    },
    setChangingFor(state, value) {
      state.changingFor = value
    },
  },
  actions: {
    async loadDictionary(ctx, { lang, key }) {
      const dictionary = await getDictionary(lang, key)

      ctx.commit('setDictionary', { lang, key, dictionary })
    },
  },
  getters: {
    doesKeyExist: state => (key, customLang = null) => {
      const lang = customLang || state.currentLang

      return Boolean(state.dictionaries[lang] && state.dictionaries[lang][key])
    },
    title: state => (key, customLang = null) => {
      const lang = customLang || state.currentLang

      if (!state.dictionaries[lang]) {
        return 'Error: 1'
      }

      if (!state.dictionaries[lang][key]) {
        return 'Error: 2'
      }

      return state.dictionaries[lang][key].title || 'Error: 3'
    },
    text: state => (fullKey, options = {}) => {
      const [key, phrase] = fullKey.split('/')

      let str = state.dictionaries[state.currentLang][key][phrase]

      Object.entries(options).forEach(([searchVal, replaceVal]) => {
        str = str.replaceAll(`\${${searchVal}}`, replaceVal)
      })

      return str
    },
  },
}
