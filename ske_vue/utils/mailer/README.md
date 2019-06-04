# 基本信息
library name: emailer 
version: 1.0.0
author: 刘耀惠
date: 2019.04.09

# 依赖
nodeemailer

# 功能
1. 暂时仅有一个发送邮件功能
2. 暂时仅有一个html邮件模板

# todo
- 进一步测试bug以及功能完善
- 完善邮件ui设计

# update
- 2019.04.11
  - 增加对tokener的依赖 tokener v1.0.0(from 刘耀惠)
  - 改sendEmail为sendActiveEmail，功能更加单一

- 2019.04.12
  - 增加sendPswEmail 发送密码邮件
  - 一个ejs模板