const User = require('../../model/user')
const Resource = require('../../model/resource')

module.exports = async ctx => {
  const { _id } = ctx.params
  const user = await User.findOne({ _id })

  if (!user) {
    // 一般不会发生这类事情
    ctx.throw(500)
    return
  }

  let like_counts_sum = 0
  let read_counts_sum = 0
  const resourcesArr = user.resources
  const collectionArr = user.collections
  const resources_sum = resourcesArr.length
  const collections_sum = collectionArr.length

  // 计算点赞数量和资源
  const resourcesList = []
  for (let i = 0; i < resourcesArr.length; i++) {
    let _id = resourcesArr[i]
    let resource = await Resource.findOne({ _id })
    like_counts_sum += resource.like_counts
    read_counts_sum += resource.read_counts
    resourcesList.push(resource)
  }

  const collectionsList = []
  // 计算返回的资源列表
  for (let i = 0; i < collectionArr.length; i++) {
    const _id = collectionArr[i]
    const result = await Resource.findOne({ _id })
    collectionsList.push(result)
  }
  // 异步出错
  /*  resourcesArr.forEach(async _id => {
    const resource = await Resource.findOne({ _id })
    like_counts_sum += resource.like_counts
    read_counts_sum += resource.read_counts
  }) */

  ctx.body = {
    code: 1,
    message: '返回用户信息成功',
    user: {
      _id: user._id,
      status: user.status,
      gender: user.gender,
      age: user.age,
      birthday: user.birthday,
      location: user.location,
      mtto: user.mtto,
      introduction: user.introduction,
      // collections: user.collections,
      collectionsList,
      resourcesList,
      // resources: user.resources,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      create_time: user.create_time,
      like_counts_sum,
      read_counts_sum,
      resources_sum,
      collections_sum
    }
  }
}
