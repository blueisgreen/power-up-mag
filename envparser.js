const dotEnv = require('dotenv')
const parsedEnv = dotEnv.config().parsed

module.exports = function () {
  for (key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      parsedEnv[key] = JSON.stringify(parsedEnv[key])
    }
  }
  return parsedEnv
}
