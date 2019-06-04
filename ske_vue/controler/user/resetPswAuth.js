// 重置密码的认证
const User = require('../../model/user')
module.exports = async ctx => {
  const { token } = ctx.params
  const user = await User.findOne({
    reset_password_token: token,
    reset_password_expires: { $gt: Date.now() }
  })
  if (user) {
    // 生成jst token
    const jstToken = createToken({ _id: user._id })
    ctx.body = {
      message: '重置密码认证成功，开始重置密码',
      token: jstToken
    }
  } else {
    ctx.status = 401
    ctx.body = {
      message: '链接无效或者链接期限已过'
    }
  }
}
