const Resource = require('../../../model/resource')

module.exports = async ctx => {
  const { _id } = ctx.params

  const resource = await Resource.findOneAndUpdate(
    { _id },
    { $inc: { like_counts: 1 } }
  )

  // 资源不存在
  if (!resource) {
    ctx.body = {
      code: 0,
      message: '点赞失败，资源不存在'
    }
    return
  }

  ctx.body = {
    code: 1,
    message: '点赞成功'
  }
}
