const getCurrentTimestamp = require('./getCurrentTimestamp')
const getArraySum = require('./getArraySum')
const getRandomInt = require('./getRandomInt')

module.exports = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }