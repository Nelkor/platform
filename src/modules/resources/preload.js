import store from '@plugins/store'
import { setCurrentDictionaries, setCurrentView } from '@helpers/app-state'

import { setTitle } from './lang-helper'

const loadedAssets = new Map

const createImage = src => new Promise((resolve, reject) => {
  const image = new Image

  image.onload = () => resolve(image)
  image.onerror = reject

  image.src = src
})

const createAudio = ([name, url]) => new Promise((resolve, reject) => {
  const audio = new Audio(url)

  audio.addEventListener('canplaythrough', () => resolve({ name, audio }))
  audio.addEventListener('error', reject)
})

const addAudio = (acc, { name, audio }) => {
  acc[name] = audio

  return acc
}

export const loadView = async ({
  component,
  name,
  images = [],
  sounds = {},
  popups = {},
  shaders = {},
  dictionaries = [],
}) => {
  dictionaries.push(name)

  setCurrentView(name)
  setCurrentDictionaries(dictionaries)

  if (loadedAssets.has(name)) {
    // TODO переделать
    // Если для словарей не загружен актуальный язык, загружаем его
    const notLoadDictionaries = dictionaries
      .filter(key => !store.getters['lang/doesKeyExist'](key))

    if (notLoadDictionaries.length) {
      await store
        .dispatch('lang/loadDictionaries', { keys: notLoadDictionaries })
    }

    setTitle()

    return component
  }

  const imagesPromises = Promise.all(images.map(createImage))
  const soundsPromises = Promise.all(Object.entries(sounds).map(createAudio))

  const [pix, audios] = await Promise.all([
    imagesPromises,
    soundsPromises,
    store.dispatch('lang/loadDictionaries', { keys: dictionaries }),
  ])

  setTitle()

  const audioSet = audios.reduce(addAudio, Object.create(null))

  loadedAssets.set(name, { pix, audioSet, popups, shaders })

  return component
}

export const getSound = (key, name) => loadedAssets.get(key)?.audioSet[name]
export const getPopup = (key, name) => loadedAssets.get(key)?.popups[name]
