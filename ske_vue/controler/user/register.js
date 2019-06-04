// 注册的处理
const User = require('../../model/user')
const gravatar = require('gravatar')
const { encrypt } = require('../../utils/encrypter')
const validateRegister = require('../../utils/validator/validateRegister')
const { sendActiveEmail } = require('../../utils/mailer')

module.exports = async ctx => {
  //判断表单输入是否验证通过
  const error = validateRegister(ctx.request.body)
  if (error) {
    ctx.body = {
      code: 0,
      message: error
    }
    return
  }

  const { username, email, password } = ctx.request.body
  try {
    const usersByName = await User.find({ username })
    const usersByEmail = await User.find({ email })
    if (usersByName.length) {
      ctx.body = {
        code: 0,
        message: '用户名已经存在'
      }
      return
    }

    if (usersByEmail.length) {
      ctx.body = {
        code: 0,
        message: '邮箱已经存在'
      }
      return
    }

    // 建立User实例信息，并保存
    const avatar = gravatar.url(email, {
      protocol: 'https',
      s: '200',
      r: 'pg',
      d: 'mm'
    }) // mm如无头像为默认头像
    const newUser = new User({
      username,
      email,
      password: await encrypt(password),
      avatar
    })
    const user = await newUser.save()

    // 发送邮箱激活验证码
    await sendActiveEmail(user.email, '/email-activation', { _id: user._id })

    ctx.status = 201 // created
    ctx.body = {
      code: 1,
      message: `注册成功,请到邮箱 ${user.email} 进行账户激活`
    }
  } catch {
    ctx.throw(500)
  } // catch end
}
