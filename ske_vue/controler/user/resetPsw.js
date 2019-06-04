const User = require('../../model/user')
const { validateResetPsw } = require('../../utils/validator')
const { encrypt } = require('../../utils/encrypter')

module.exports = async ctx => {
  const { token } = ctx.params
  const user = await User.findOne({
    reset_password_token: token,
    reset_password_expires: { $gt: Date.now() }
  })

  if (!user) {
    ctx.body = {
      code: 0,
      message: '重置密码链接无效或过期'
    }
    return
  }

  let { password } = ctx.request.body

  const error = validateResetPsw({ password })
  if (error) {
    ctx.body = {
      code: 0,
      message: error
    }
    return
  }

  password = await encrypt(password)
  await User.findOneAndUpdate(
    { reset_password_token: token },
    {
      password
    }
  )

  ctx.body = {
    code: 1,
    message: '重置密码成功'
  }
}
