const isLength = require('validator/lib/isLength')

module.exports = ({ password }) => {
  if (!isLength(password, { min: 6 })) {
    return '密码长度不能小于6位'
  }
  // 如果验证通过，error返回''
  return ''
}
