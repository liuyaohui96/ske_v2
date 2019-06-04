const User = require('../../model/user')
const Resource = require('../../model/resource')

// 返回收藏的资源
module.exports = async ctx => {
  const { _id } = ctx.params

  const user = await User.findOne({ _id })

  if (!user) {
    ctx.throw(500)
    return
  }

  // 资源id数组
  const collections = user.collections
  const resources = []
  for (let i = 0; i < collections.length; i++) {
    const _id = collections[i]
    const result = await Resource.findOne({ _id })
    resources.push(result)
  }
  ctx.body = {
    code: 1,
    resources
  }
}
