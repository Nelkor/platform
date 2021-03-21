import store from '@/store'

import { getCurrentView } from '@helpers/app-state'

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

const loadDictionary = (lang, key) => store
  .dispatch('lang/loadDictionary', { lang, key })

export const changeLang = async lang => {
  const { currentLang } = store.state.lang
  const key = getCurrentView() || basicKey

  if (!languages[lang]) {
    throw 'invalid language'
  }

  if (lang === currentLang) {
    return
  }

  store.commit('lang/setChangingFor', lang)

  const keysToLoad = [key, key !== basicKey && basicKey]
    .filter(Boolean)
    .filter(k => !store.getters['lang/doesKeyExist'](k, lang))

  await Promise.all(keysToLoad.map(k => loadDictionary(lang, k)))

  localStorage.setItem(lsLangKey, lang)

  store.commit('lang/setCurrentLang', lang)
  store.commit('lang/setChangingFor', '')

  html.setAttribute('lang', lang)
  html.setAttribute('dir', dirByLang(lang))

  title.innerText = store.getters['lang/title'](key)
}
