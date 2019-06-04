// 集合形成validator,一般不需要用到全部的函数

const validateRegister = require('./validateRegister')
const validateLogin = require('./validateLogin')
const validateChangePsw = require('./validateChangePsw')
const validateForgetPsw = require('./validateForgetPsw')
const validateResetPsw = require('./validateResetPsw')

module.exports ={
  validateRegister,
  validateLogin,
  validateChangePsw,
  validateForgetPsw,
  validateResetPsw
}