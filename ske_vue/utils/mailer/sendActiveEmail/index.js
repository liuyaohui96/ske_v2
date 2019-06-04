// sendActiveEmail 函数 用于发送激活邮件

const transporter = require('./transporter')
// 创建email html模板的方法
const createHtmlTpl = require('./createHtmlTpl')

/**
 * 发送邮件
 * @type async function
 * @param to 目标对象
 * @param path 请求路径
 * @param userObj 用于生成token
 * @todo 没有catch error
 */
module.exports = async (to, path, userObj) => {
  const htmlTpl = await createHtmlTpl(path, userObj)
  const mailOptions = {
    from: '<test823406519@163.com>', // 发送者
    to, // 接受者
    subject: 'Join SKE, Share more, Learn more', // 邮件主题
    html: htmlTpl
    // 使用的html模板
  }
  const result = await transporter.sendMail(mailOptions)
  if (result) {
    console.log('邮件发送成功')
  } else {
    console.log('邮件发送失败')
  }
}
