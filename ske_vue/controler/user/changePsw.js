const User = require('../../model/user')
const bcrypt = require('bcrypt')
const { encrypt } = require('../../utils/encrypter')
const { validateChangePsw } = require('../../utils/validator')
const { verifyToken } = require('../../utils/tokener')

module.exports = async ctx => {
  try {
    var { _id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  } catch (err) {
    ctx.body = {
      code: 0,
      message: '没有权限修改密码'
    }
    return
  }

  let { password, password2, password3 } = ctx.request.body
  const user = await User.findOne({ _id })

  if (!user) {
    ctx.body = {
      code: 0,
      message: '找不到用户'
    }
    return
  }

  if (!(await bcrypt.compare(password, user.password))) {
    ctx.body = {
      code: 0,
      message: '密码错误'
    }
    return
  }

  const error = validateChangePsw({ password2, password3 })
  if (error) {
    ctx.body = {
      code: 0,
      message: error
    }
    return
  }

  // 修改密码
  password2 = await encrypt(password2) // 加密
  await User.findByIdAndUpdate({ _id }, { password: password2 })
  ctx.body = {
    code: 1,
    message: '修改密码成功'
  }
}
