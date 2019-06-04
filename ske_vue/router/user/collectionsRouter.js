// 用户所有信息的获取

const Router = require('koa-router')
const router = new Router()

const {
  getCollectionsControler,
  manageCollectionsControler
} = require('../../controler/user')

/**
 * @route GET /users/_id/collections
 * @description 获取收藏资源
 * @access 接口是私密的
 */
router.get('/users/:_id/collections',getCollectionsControler)


/**
 * @route PUT /users/_id/collections
 * @description 更新收藏资源(加入和溢出)
 * @access 接口是私密的
 */
router.put('/users/:_id/collections',manageCollectionsControler)


module.exports = router

