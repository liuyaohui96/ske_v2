const User = require('../model/user')
const { verifyToken } = require('../utils/tokener')
module.exports = async ctx => {
  const { _id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id

  const user = await User.findOne({ _id })

  if (!user) {
    ctx.body = {
      code: 0,
      message: '验证存过，但用户不存在'
    }
    return
  }

  ctx.body = {
    code: 1,
    message: 'token 验证通过',
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
    }
  }
}
