import { getInitialLang, changeLang } from './lang-helper'

export const preloadBasicResources = async () => {
  const lang = getInitialLang()

  // Предзагрузить базовые изображения, звуки и попапы
  // await Promise.all(...
  await changeLang(lang)
}
