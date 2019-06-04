const nodemailer = require('nodemailer')

// 创建可重用的transporter 对象
const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'test823406519@163.com',
    pass: 'test123456'
  }
})

module.exports = transporter
