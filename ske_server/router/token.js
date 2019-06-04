const Router = require('koa-router')

const router = new Router()

const tokenControler = require('../controler/tokenControler')

/**
 * @route GET /token 验证token
 * @description 验证token
 * @access 接口是公开的
 */
router.get('/token', tokenControler)

module.exports = router
