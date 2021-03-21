const getApiUrl = schema => `${schema}://localhost:3063`

const dictionaryPort = 4937

module.exports = {
  proxy: {
    '^/api': {
      target: getApiUrl('http'),
    },
    '^/realtime-connection': {
      target: getApiUrl('ws'),
      ws: true,
    },
    '^/dictionary': {
      target: `http://localhost:${dictionaryPort}`,
    },
  },
}
