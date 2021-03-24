import store from '@plugins/store'

import { getCurrentDictionaries, getCurrentView } from '@helpers/app-state'

import { languages, dirByLang } from './languages'

const html = document.querySelector('html')
const title = document.querySelector('title')

const basicKey = 'basic'
const lsLangKey = 'lang'

export const cutLang = str => str.split('-')[0].toLowerCase()

export const getInitialLang = () => {
  const fromLS = localStorage.getItem(lsLangKey)

  if (languages[fromLS]) {
    return fromLS
  }

  const fromNavigator = cutLang(navigator.language)

  if (languages[fromNavigator]) {
    return fromNavigator
  }

  return Object.keys(languages)[0]
}

export const changeLang = async lang => {
  const { currentLang } = store.state.lang

  if (!languages[lang]) {
    throw 'invalid language'
  }

  if (lang === currentLang) {
    return
  }

  store.commit('lang/setChangingFor', lang)

  const keys = [...getCurrentDictionaries(), basicKey]
    .filter(k => !store.getters['lang/doesKeyExist'](k, lang))

  if (keys.length) {
    await store.dispatch('lang/loadDictionaries', { lang, keys })
  }

  localStorage.setItem(lsLangKey, lang)

  store.commit('lang/setCurrentLang', lang)
  store.commit('lang/setChangingFor', '')

  html.setAttribute('lang', lang)
  html.setAttribute('dir', dirByLang(lang))

  // TODO это действие будет выполняться не только при смене языка,
  // но также и при смене View. Вынести куда-нибудь и использовать оттуда.
  title.innerText = store.getters['lang/title'](getCurrentView() || basicKey)
}
