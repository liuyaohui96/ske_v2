const Resource = require('../../../model/resource')
const { like_counts, collection_counts } = require('../../../config')

module.exports = async ctx => {
  try {
    const { sort } = ctx.params
    if (sort !== 'newest' && sort !== 'hot') {
      ctx.body = {
        code: 0,
        message: '请求推荐资源失败，只返回最新和最热推荐资源'
      }
      return
    }

    let sortCondtion = 'like_counts'
    if (sort === 'newest') {
      sortCondtion = 'last_update_time'
    }

    const resources = await Resource.find({
      like_counts: {
        $gte: collection_counts
      },
      collection_counts: {
        $gte: like_counts
      }
    }).sort({ [sortCondtion]: -1 }) // 根据点赞降序输出

    if (!resources.length) {
      ctx.body = {
        code: 0,
        message: '请求推荐资源失败，资源不存在'
      }
      return
    }

    ctx.body = {
      code: 1,
      message: `最${sort === 'hot' ? '热' : '新'}推荐资源返回成功`,
      resources
    }
  } catch (err) {
    ctx.throw(500)
  }
}
