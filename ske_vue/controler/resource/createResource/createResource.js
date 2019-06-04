const Resource = require('../../../model/resource')
const User = require('../../../model/user')
const { verifyToken } = require('../../../utils/tokener')

module.exports = async ctx => {
  const { _id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  const { classification, title, content } = ctx.request.body

  try {
    const user = await User.findOne({ _id })

    // 处理用户不存在
    if (!user) {
      ctx.body = {
        code: 0,
        message: '新建资源失败，请尝试先登录'
      }
      return
    }

    const newResource = new Resource({
      classification,
      author_name: user.username,
      author_id: _id,
      title,
      content
    })
    const resource = await newResource.save()

    // 保存更新资源id到用户resource
    await User.findOneAndUpdate(
      { _id },
      {
        $addToSet: {
          resources: resource._id
        }
      }
    )

    ctx.status = 201 // created
    ctx.body = {
      code: 1,
      message: '发布文章成功'
      // resource
    }
  } catch (err) {
    ctx.throw(500)
  }
}
