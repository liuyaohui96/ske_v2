const Resource = require('../../../model/resource')
const { verifyToken } = require('../../../utils/tokener')

module.exports = async ctx => {
  try {
    var { _id } = verifyToken(ctx.header.authorization.split(' ')[1]) // token中获取id
  } catch (err) {
    ctx.body = {
      code: 0,
      message: '没有权限修改该文章'
    }
    return
  }

  const { r_id } = ctx.params
  const { classification, title, content } = ctx.request.body

  try {
    const resource = await Resource.findOne({ _id: r_id })
    if (!resource) {
      ctx.body = {
        code: 0,
        message: '编辑资源失败，找不到资源'
      }
      return
    }

    if (_id !== resource.author_id) {
      // 保证不是作者不能进行编辑，此前已有token验证
      ctx.body = {
        code: 0,
        message: '需要作者才能编辑该资源'
      }
      return
    }

    // 更新资源
    await Resource.findOneAndUpdate(
      { _id: r_id },
      { classification, title, content, last_update_time: Date.now() }
    )
    ctx.body = {
      code: 1,
      message: '编辑成功'
    }
  } catch (err) {
    ctx.throw(500)
  }
}
