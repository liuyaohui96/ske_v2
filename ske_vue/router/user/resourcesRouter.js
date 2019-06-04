// 用户上传的资源的路由
const Router = require('koa-router')
const router = new Router()

const {
  getResourcesControler,
} = require('../../controler/user')

/**
 * @route GET /users/:_id/resources
 * @description 获取用户信息
 * @access 接口是私密的
 */
router.get('/users/:_id/resources',getResourcesControler)

module.exports = router

