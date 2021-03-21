export const getDictionary = async (lang, key) => {
  const result = await fetch(`/dictionary/${key}/${lang}`)

  return result.json()
}
