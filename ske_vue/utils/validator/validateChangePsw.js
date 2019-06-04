const isLength = require('validator/lib/isLength')

/**
 * @param data Object  包含password, password2
 */
module.exports = ({ password2, password3 }) => {
  if (!isLength(password2, { min: 6 })) {
    return '新密码长度不能小于6位'
  }

  if (password2 !== password3) {
    return '两次密码不一致'
  }

  // 如果验证通过，error返回''
  return ''
}
