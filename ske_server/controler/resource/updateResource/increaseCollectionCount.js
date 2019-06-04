const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const { verifyToken } = require('../../../utils/tokener')

module.exports = async ctx => {
  const { _id } = ctx.params

  try {
    var { _id: u_id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取用户id
  } catch (err) {
    ctx.body = {
      code: 0,
      message: '需要再次登陆'
    }
  }

  const user = await User.findOne({ _id: u_id })
  collectionsArr = user.collections
  // 如果还没收藏，增加
  if (!collectionsArr.some(item => item === _id)) {
    // 将resource对应的收藏数量增加1
    var resource = await Resource.findOneAndUpdate(
      { _id },
      { $inc: { collection_counts: 1 } }
    )
    // 资源不存在
    if (!resource) {
      ctx.body = {
        code: 0,
        message: '收藏失败，资源不存在'
      }
      return
    }
  } else {
    ctx.body = {
      code: 0,
      message: '已经收藏过该资源了'
    }
    return
  }

  // 将收藏同步到用户collection中
  await User.findOneAndUpdate(
    { _id: u_id },
    { $addToSet: { collections: resource._id } }
  )

  ctx.body = {
    code: 1,
    message: '收藏成功'
  }
}
