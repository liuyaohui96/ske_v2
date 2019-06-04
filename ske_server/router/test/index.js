const Router = require('koa-router')
const router = new Router({
  prefix: '/test'
})
// 测试路由的配置

/**
 * @route GET /test
 * @description 注销账户
 * @access 接口是私密的，用于测试token
 */
const {verifyToken} = require('../../utils/tokener')
router.get('/liuyaohui', async ctx => {
 ctx.body = {
   'ctx.header.authorization': ctx.header.authorization,
   target: verifyToken(ctx.header.authorization.split(' ')[1]),
 }

})

/**
 * @description 测试
 */
router.get('/', async ctx => {
  await ctx.render('index')
})

/**
 * @description 测试文件上传
 */
const fs = require('fs')
const path = require('path')
let count = 0;
router.post('/upload', async ctx => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, '../../static') + `/${count++}.jpg`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = {
    message: 'hello'
  };
})


module.exports = router