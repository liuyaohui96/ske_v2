const Resource = require('../../../model/resource')

module.exports = async ctx => {
  const { classification, sort } = ctx.params

  if (sort !== 'hot' && sort !== 'newest') {
    ctx.body = {
      code: 0,
      message: '请求资源出错，只能返回最新和最热的资源'
    }
    return
  }

  let sortCondtion = 'like_counts'
  if (sort === 'newest') {
    sortCondtion = 'last_update_time'
  }

  const resources = await Resource.find({ classification }).sort({
    [sortCondtion]: -1
  })

  if (!resources.length) {
    ctx.body = {
      code: 0,
      message: '请求分类资源出错，找不到该资源'
    }
    return
  }

  ctx.body = {
    code: 1,
    message: `最${sort === 'hot' ? '热' : '新'}的分类资源返回成功`,
    resources
  }
}
