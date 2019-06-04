// emailer

// 挂载激活的email到emailer上
const sendActiveEmail = require('./sendActiveEmail')
const sendResetPswEmail = require('./sendResetPswEmail')

module.exports = {
  sendActiveEmail,
  sendResetPswEmail
}
