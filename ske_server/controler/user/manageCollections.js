const User = require('../../model/user')

module.exports = async ctx => {
  const {_id} = ctx.params
  const {collections} = ctx.request.body

  const user = await User.findOne({_id})

  if(!user){
    ctx.throw(500)
    return
  }

  await User.findOneAndUpdate({_id},{collections})
  ctx.body = {
    message: '更新收藏成功'
  }
}