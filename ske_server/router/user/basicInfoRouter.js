const Router = require('koa-router')

const router = new Router()

// 引入各接口的处理
const {
  loginControler,
  registerControler,
  activeEmailControler,
  changePswControler,
  forgetPswControler,
  resetPswAuthControler,
  resetPswControler
} = require('../../controler/user')

/**
 * @route POST /user
 * @description 注册
 * @access 接口是公开的
 */
router.post('/users', registerControler)

/**
 * @route GET /email-activation/:captcha
 * @description 邮箱激活验证
 * @access 接口是私密的
 */
router.get('/email-activation/:captcha', activeEmailControler)

/**
 * @route POST user/actions/login
 * @description 登陆
 * @access 接口是公开的
 */
router.post('/users/actions/login', loginControler)

/**
 * @route PUT /users/password
 * @description 修改密码
 * @access 接口是私密的
 */
router.put('/users/password', changePswControler)

/**
 * @route POST /forget-password
 * @description 忘记密码
 * @access 接口是公开的
 */
router.post('/forget-password', forgetPswControler)

/**
 * @route GET /reset-password-authentication/:token
 * @description 重置密码的认证
 * @access 接口是公开的
 */
router.get('/reset-password-authentication/:token', resetPswAuthControler)

/**
 * @route /reset-password/:token
 * @description 重置密码
 * @access 接口是公开的
 */
router.post('/reset-password/:token', resetPswControler)

// 导出router
module.exports = router
