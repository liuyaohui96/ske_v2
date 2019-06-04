const User = require('../../model/user')
const crypto = require('crypto') // node 内置用于加密解密的模块
const { validateForgetPsw } = require('../../utils/validator')
const { resetPswExpiresIn } = require('../../config') // 重置密码的失效时间
const { sendResetPswEmail } = require('../../utils/mailer')

module.exports = async ctx => {
  // 接受一个邮箱,发送重置链接到邮箱上
  const { email } = ctx.request.body

  // 表单验证
  const error = validateForgetPsw({ email })
  if (error) {
    ctx.body = {
      code: 0,
      message: error
    }
    return
  }

  try {
    const users = await User.find({ email })

    if (!users.length) {
      ctx.body = {
        code: 0,
        message: '未找到与该电子邮件关联的帐号'
      }
      return
    }

    // 随机生成随机加密数据的哈希字符串作为token
    const token = await crypto.randomBytes(20).toString('hex')
    // 存储token及其过期时间
    await User.findOneAndUpdate(
      { email },
      {
        reset_password_token: token,
        reset_password_expires: Date.now() + resetPswExpiresIn // 1h expires
      }
    )

    // 发送重置链接到指定邮箱
    await sendResetPswEmail(email, '/reset-password', token)
    ctx.body = {
      code: 1,
      message: `已发送重置密码链接到 ${email} 邮箱中`
    }
  } catch (err) {
    ctx.throw(500)
  }
}
