import { cutLang } from '../lang-helper'

test('cut lang', () => {
  expect(cutLang('en')).toBe('en')
  expect(cutLang('EN-US')).toBe('en')
})
