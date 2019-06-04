// 用户所有信息的获取

const Router = require('koa-router')
const router = new Router()

const { getUserInfoControler } = require('../../controler/user')

/**
 * @route GET /users/:_id
 * @description 获取用户信息
 * @access 接口是公开的
 */
router.get('/users/:_id', getUserInfoControler)

module.exports = router
