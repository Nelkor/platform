const { createServer } = require('http')

const dictionaries = require('./dictionaries')

const port = 4937
const maxNesting = 8
const pathPrefix = 2

createServer((req, res) => {
  const { url } = req
  const [pathString] = url.split('?')

  const keys = pathString
    .split('/', maxNesting)
    .slice(pathPrefix)
    .filter(Boolean)

  const lang = keys.pop()

  if (!dictionaries[lang] || keys.some(key => !dictionaries[lang][key])) {
    res.end()

    return
  }

  const result = keys.reduce((acc, cur) => {
    acc[cur] = dictionaries[lang][cur]

    return acc
  }, {})

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.write(JSON.stringify(result))
  res.end()
}).listen(port)

// eslint-disable-next-line no-console
console.log('dictionaries server started')
