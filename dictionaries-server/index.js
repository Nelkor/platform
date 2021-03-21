const { createServer } = require('http')

const dictionaries = require('./dictionaries')

const port = 4937

createServer((req, res) => {
  const { url } = req
  const [pathString] = url.split('?')

  const [key, lang] = pathString
    .split('/', 4)
    .slice(2)
    .filter(Boolean)

  if (!key || !lang || !dictionaries[key]) {
    res.end()

    return
  }

  // TODO: если в этом key нет перевода на lang,
  // выдать английскую версию.

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.write(JSON.stringify(dictionaries[key][lang]))
  res.end()
}).listen(port)
