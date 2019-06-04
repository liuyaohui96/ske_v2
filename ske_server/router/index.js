const Router = require('koa-router')
const router = new Router()

// ------- 引入全部的router文件 -------
const user = require('./user') // 用户相关路由
const resource = require('./resource') // 知识资源相关路由
const test = require('./test') // 测试相关路由
const token = require('./token') // token验证相关路由

// ------- router 中间件的配置 -------
router.use(user.routes()).use(user.allowedMethods())
router.use(resource.routes()).use(resource.allowedMethods())
router.use(test.routes()).use(test.allowedMethods())
router.use(token.routes()).use(token.allowedMethods())

// 导出router
module.exports = router
