const Router = require('koa-router')

const router = new Router()


// 引入用户基本信息的路由配置
// 登陆，注册，发送激活邮件，修改密码，忘记密码,重置密码认证和重置密码等
const basicInfoRouter = require('./basicInfoRouter')

// 用户中心的信息的路由配置
// 如用户名，性别，年龄等等
const profileRouter =require('./profileRouter')

// 引入用户收藏的路由配置
const collectionsRouter = require('./collectionsRouter')

// 引入用户上传资源的路由配置
const resourcesRouter = require('./resourcesRouter')

// 用户所有信息的获取
const userinfoRouter = require('./userinfoRouter')

// 中间件配置
router.use(basicInfoRouter.routes()).use(basicInfoRouter.allowedMethods())
router.use(profileRouter.routes()).use(profileRouter.allowedMethods())
router.use(userinfoRouter.routes()).use(userinfoRouter.allowedMethods())
router.use(collectionsRouter.routes()).use(collectionsRouter.allowedMethods())
router.use( resourcesRouter.routes()).use( resourcesRouter.allowedMethods())

module.exports = router