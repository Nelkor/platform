export const languages = Object.freeze({
  en: {
    name: 'English',
    rtl: false,
  },
  ru: {
    name: 'Русский',
    rtl: false,
  },
  ar: {
    name: 'عرب',
    rtl: true,
  },
  iw: {
    name: 'עִברִית',
    rtl: true,
  },
  ja: {
    name: '日本語',
    rtl: false,
  },
})

export const dirByLang = lang => languages[lang].rtl ? 'rtl' : 'ltr'
