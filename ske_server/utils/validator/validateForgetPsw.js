const isEmail = require('validator/lib/isEmail')

/**
 * @param email in a object
 */
module.exports = ({ email }) => {
  if (!isEmail(email)) {
    return '邮箱格式不正确'
  }
  // 如果验证通过，error返回''
  return ''
}
