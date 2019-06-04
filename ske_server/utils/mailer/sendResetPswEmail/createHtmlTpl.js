const ejs = require('ejs')

// 需要利用客户端的页面
// const {baseUrl} = require('../../../config')

const { activeEjsTpl } = require('./config') // 引入模板配置

/**
 * 返回html邮件模板字符串
 * @param path 请求路径
 * @param token 身份验证
 * @return 返回html模板字符串
 * @todo 没有catch error
 */
module.exports = createHtmlTpl = async function(path, token) {
  const url = `http://localhost:8080/#${path}/${token}`
  const result = await ejs.renderFile(__dirname + activeEjsTpl, { url })
  return result
}
