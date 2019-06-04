const User = require('../../model/user')

module.exports = async ctx => {
  const {_id} = ctx.params

  const user = await User.findOne({_id})

  if(!user){
    ctx.throw(500)
    return
  }

  const {resources} = user
  ctx.body = {
    message: '获取用户资源成功',
    resources
  }
}