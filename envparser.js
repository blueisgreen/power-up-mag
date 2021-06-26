const dotEnv = require('dotenv')
const parsedEnv = dotEnv.config().parsed

module.exports = function () {
  return parsedEnv
}
