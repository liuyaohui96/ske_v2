const User = require('../../model/user')
const bcrypt = require('bcrypt')
const { createToken } = require('../../utils/tokener')

const validateLogin = require('../../utils/validator/validateLogin')
module.exports = async ctx => {
  // 表单验证
  const error = validateLogin(ctx.request.body)
  if (error) {
    ctx.body = {
      code: 0,
      message: error
    }
    return
  }

  const { email, password } = ctx.request.body

  try {
    const users = await User.find({ email })
    if (!users.length) {
      ctx.body = {
        code: 0,
        message: '登陆失败，邮箱不存在'
      }
      return
    }

    if (!(await bcrypt.compare(password, users[0].password))) {
      ctx.body = {
        code: 0,
        message: '登陆失败，密码错误'
      }
      return
    }

    if (users[0].status === 0) {
      ctx.body = {
        code: 0,
        message: '登陆失败，账号尚未激活，请到邮箱进行激活'
      }
      return
    }

    //生成token
    const token = createToken({ _id: users[0]._id })
    const user = users[0]
    ctx.body = {
      code: 1,
      message: '登陆成功',
      user: {
        _id: user._id,
        status: user.status,
        gender: user.gender,
        age: user.age,
        birthday: user.birthday,
        location: user.location,
        mtto: user.mtto,
        introduction: user.introduction,
        collections: user.collections,
        resources: user.resources,
        username: user.username,
        email: user.email,
        avatar: user.avatar
      },
      token
    }
  } catch (err) {
    ctx.throw(500, 'server error')
  } // catch end
}
