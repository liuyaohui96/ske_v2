const Router = require('koa-router')

const router = new Router()

// 导入各模块router
const createResourceRouter = require('./createResourceRouter')
const updateResourceRouter = require('./updateResourceRouter')
const searchResourceRouter = require('./searchResourceRouter')


// 中间间配置
router.use(createResourceRouter.routes()).use(createResourceRouter.allowedMethods())
router.use(updateResourceRouter.routes()).use(updateResourceRouter.allowedMethods())
router.use(searchResourceRouter.routes()).use(searchResourceRouter.allowedMethods())


module.exports = router