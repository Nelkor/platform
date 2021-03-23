export const getDictionary = async (lang, keys) => {
  const result = await fetch(`/dictionary/${keys.join('/')}/${lang}`)

  return result.json()
}
