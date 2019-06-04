const User = require('../../model/user')
const Resource = require('../../model/resource')
const { verifyToken } = require('../../utils/tokener')

module.exports = async ctx => {
  try {
    var { _id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  } catch (err) {
    ctx.body = {
      code: 0,
      message: '你没有权限进行信息修改'
    }
    return
  }

  const {
    username, // add
    gender,
    age,
    location,
    // birthday,
    mtto,
    introduction
    // private,
  } = ctx.request.body

  if (!username) {
    ctx.body = {
      code: 0,
      message: '用户名不能为空'
    }
    return
  }

  // 判断用户名是否存在
  let user = await User.findOne({ username })
  // 用户的用户名已经存在，而且这个用户的id不与修改信息的用户id一致
  if (user && user._id != _id) {
    ctx.body = {
      code: 0,
      message: '用户名已经存在'
    }
    return
  }
  user = await User.findOne({ _id })
  // 修改完用户名，需要对用户资源的作者名称也做出修改
  const resourceArr = user.resources
  for (let i = 0; i < resourceArr.length; i++) {
    let _id = resourceArr[i]
    await Resource.findOneAndUpdate({ _id }, { author_name: username })
  }
  await User.findOneAndUpdate(
    { _id },
    {
      username,
      gender,
      age,
      location,
      // birthday,
      mtto,
      introduction
      // private
    }
  )

  ctx.body = {
    code: 1,
    message: '个人信息更改已保存'
  }
}
