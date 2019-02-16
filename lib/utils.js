const { resolve } = require('path')

function resolvePath (...args) {
  return resolve(__dirname, ...args)
}

module.exports = {
  resolvePath
}
