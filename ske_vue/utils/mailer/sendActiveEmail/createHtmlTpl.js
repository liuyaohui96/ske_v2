const ejs = require('ejs')


const {activeEjsTpl} = require('./config') // 引入模板配置
const {baseUrl}=require('../../../config') // 基础路径
const {createToken} = require('../../tokener') // 生成token的方法

/**
 * 返回html邮件模板字符串
 * @param path 请求路径
 * @param userObj 用于生成token,至少要有一个id属性
 * @return 返回html模板字符串
 * @example path: '/test', useObj: {id}
 * @todo 没有catch error
 */
module.exports = createHtmlTpl = async function(path, userObj) {
  const token = createToken(userObj)
  const url = `${baseUrl}${path}/${token}`
  const result = await ejs.renderFile(__dirname+activeEjsTpl, { url })
  return result
}
