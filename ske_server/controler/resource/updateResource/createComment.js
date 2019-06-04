const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const { verifyToken } = require('../../../utils/tokener')

module.exports = async ctx => {
  // 将_id 赋值给commenter_id
  try {
    var { _id: commenter_id } = verifyToken(
      ctx.header.authorization.split(' ')[1]
    ) // token中获取id
  } catch (err) {
    ctx.body = {
      code: 0,
      message: '需要登陆后才能评论'
    }
    return
  }

  const user = await User.findOne({ _id: commenter_id })
  if (!user) {
    ctx.body = {
      code: 0,
      message: '用户不存在，请登陆'
    }
    return
  }
  // 获得commenter_name
  const commenter_name = user.username
  // 活得commenter_avatar
  const commenter_avatar = user.avatar

  const { _id } = ctx.params
  const { comment } = ctx.request.body

  // 找到相应resource，然后将评论及其id插入到comments
  const resource = await Resource.findOneAndUpdate(
    { _id },
    {
      $addToSet: {
        comments: {
          // comments 数组
          commenter_id,
          commenter_name,
          commenter_avatar,
          comment_time: Date.now(),
          comment
        }
      }
    }
  )

  if (!resource) {
    ctx.body = {
      code: 0,
      message: '错误请求，找不到资源'
    }
    return
  }

  ctx.body = {
    code: 1,
    message: '评论成功'
  }
}
