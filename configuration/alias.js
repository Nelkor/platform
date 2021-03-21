const { join, resolve } = require('path')

const { compilerOptions: { baseUrl, paths } } = require('../jsconfig')

module.exports = Object.entries(paths).reduce((acc, [key, [value]]) => {
  const [symbol] = key.split('/*')
  const [path] = value.split('/*')

  acc[symbol] = resolve(join(baseUrl, path))

  return acc
}, {})
