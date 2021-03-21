const alias = require('./configuration/alias')

module.exports = {
  moduleNameMapper: Object.entries(alias).reduce((acc, [key, value]) => {
    acc[key + '/(.*)'] = value + '/$1'

    return acc
  }, {}),
}
