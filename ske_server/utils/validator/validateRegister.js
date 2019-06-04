const isEmail = require('validator/lib/isEmail')
const isLength = require('validator/lib/isLength')
const isEqual = require('validator/lib/equals')

module.exports = validateRegister = (data) =>{
  if(!isEmail(data.email)){
    return  '邮箱格式不正确'
  }

  if(!isLength(data.password, {min:6})){
    return '密码长度不能小于6位'
  }


  if(!isEqual(data.password, data.password2)){
    return '两次密码不一致'
  }
  
  // 如果验证通过，error返回''
  return  ''
}