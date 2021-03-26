import { getDictionary } from './resources-api'

export default {
  namespaced: true,
  state: {
    currentLang: '',
    changingFor: '',
    dictionaries: {},
  },
  mutations: {
    setDictionaries(state, { lang, dictionaries }) {
      const langDictionary = state.dictionaries[lang] || {}

      state.dictionaries = {
        ...state.dictionaries,
        [lang]: { ...langDictionary, ...dictionaries },
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
    async loadDictionaries(ctx, { lang, keys }) {
      if (!lang) {
        lang = ctx.state.changingFor || ctx.state.currentLang
      }

      const dictionaries = await getDictionary(lang, keys)

      ctx.commit('setDictionaries', { lang, dictionaries })
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

      return state.dictionaries[lang][key].title || '...'
    },
    text: state => (fullKey, options = {}) => {
      const [key, phrase] = fullKey.split('/')

      // Загружен ли словарь нового языка
      const haveChangingFor = state.changingFor
        && state.dictionaries[state.changingFor]
        && state.dictionaries[state.changingFor][key]

      // Если загружен словарь нового языка, берём из него
      // Иначе из текущего (текущий должен быть загружен всегда)
      let str = haveChangingFor
        ? state.dictionaries[state.changingFor][key][phrase]
        : state.dictionaries[state.currentLang][key][phrase]

      Object.entries(options).forEach(([searchVal, replaceVal]) => {
        str = str.replaceAll(`\${${searchVal}}`, replaceVal)
      })

      return str
    },
  },
}
