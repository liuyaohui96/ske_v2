// 修改用户中心相关的信息
const Router = require('koa-router')
const router = new Router()

// 引入各接口的处理
const {
  changeUsernameControler,
  changeProfileControler,
} = require('../../controler/user')


/**
 * @route PUT /users/username
 * @description 修改用户名
 * @access 接口是私密的
 */
router.put('/users/username',changeUsernameControler)

/**
 * @route PUT /users/profile
 * @description 修改用户中心的信息
 * @access 接口是私密的
 */
router.put('/users/profile', changeProfileControler)


// 导出router
module.exports = router
