const isEmail = require('validator/lib/isEmail')
const isLength = require('validator/lib/isLength')

module.exports = validateLogin = (data) =>{
  if(!isEmail(data.email)){
    return  '邮箱格式不正确'
  }

  if(!isLength(data.password, {min:6})){
    return '密码长度不能小于6位'
  }

  // 如果验证通过，error返回''
  return ''
}