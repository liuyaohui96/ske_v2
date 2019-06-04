const Koa = require('koa')
// 引入基本配置信息
const { dbConnection, port, secretOrPrivateKey } = require('./config')

// koa-static
const static = require('koa-static')
// koa-cors
const cors = require('koa2-cors')
// kow-views
const views = require('koa-views')
// koa-router 处理路由
const router = require('./router')
// koa-body 处理请求body和文件上传
const koaBody = require('koa-body')
// koa-jwt处理认证
const jwt = require('koa-jwt')
const JWTErrorHandler = require('./middlewares/JWTErrorHandler')
// mongoose 数据库处理
const mongoose = require('mongoose')
// mongose数据库连接
mongoose
  .connect(dbConnection, { useNewUrlParser: true })
  .then(() => {
    console.log('mongodb is connnected')
  })
  .catch(err => {
    console.log('err---->', err)
  })

//----------------------------------------------------------实例化koa和中间件配置
const app = new Koa()

// koa-static 中间件配置
app.use(static(__dirname + '/static'))
// koa-bodyparser中间件配置
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      maxFieldsSize: 200 * 1024 * 1024, // 200M限制大小
      // uploadDir: __dirname+'/files'
      keepExtensions: true
    }
  })
)

// koa-cors 跨域配置
app.use(
  cors({
    origin: ctx => {
      // ctx.url 控制不能跨域访问的资源,return false
      if (ctx.url === '/test') return false

      return '*'
    }
  })
)

// koa-views配置
app.use(views(__dirname + '/views', { extension: 'ejs' }))

// koa-jwt的认证监听与错误处理
app.use(JWTErrorHandler).use(
  jwt({ secret: secretOrPrivateKey }).unless(
    // 不进行监听的路由
    {
      path: [
        /^\/users$/,
        /^\/users\/actions\/login$/,
        /^\/email-activation/,
        /^\/test\/*/,
        /^\/public\/*/,
        /^\/forget-password$/,
        /^\/reset-password/,
        /^\/reset-password-authentication/,

        // 资源获取是公开的
        /^\/resources/,
        /^\/recommend-resources/,
        /^\/classification-resources/,

        // 资源搜索是公开的
        /^\/resources/,
        /^\/search/,

        // 获取用户信息是公开的
        /^\/users\/[a-z0-9A-Z]*$/
      ]
    }
  )
)

// 路由
app.use(router.routes()).use(router.allowedMethods()) // koa-router中间件配置

app.listen(3000, () => {
  console.log(`server is running at http://localhost:${port}`)
})
