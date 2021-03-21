const { readdirSync } = require('fs')

const path = 'src/modules/helpers/global-scss'

module.exports = readdirSync(path)
  .map(file => `@import "${path}/${file}";`)
  .join('\n')
