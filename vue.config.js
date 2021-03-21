const alias = require('./configuration/alias')
const prependData = require('./configuration/scss-prepend')
const devServer = require('./configuration/dev-server')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: { prependData },
    },
  },
  configureWebpack: {
    resolve: { alias },
  },
  devServer,
}
