# 项目描述
这是ske(share knowledge everywhere)知识分享网站的服务端程序

# 文档目录结构
  - config 项目配置，如数据库的配置
    - index.js 配置的入口
  - controler 功能实现
  - data  存放json文件，用于测试或者数据响应
  - middlewares  自定义中间件
  - model 存放mongoose的model
  - node_modules 项目依赖库
  - routers 路由
  - static 静态资源目录
      - images
      - fonts
      - css
      - js
  - test
    - 进行测试相关工作      
  - utils 函数工具
  - views
    - error.ejs 错误的渲染页面
    - index.ejs 页面模板
  - .gitignore git提交忽略的文件设置
  - API文档 项目接口文件
  - app.js 项目入口文件
  - package.json 包描述文件
  - README.md 项目说明文件

# 安装相应的包
```js
yarn add koa
  - yarn add koa-router 路由
  - yarn add koa-bodyparser 解析请求体
  - yarn add koa-better-body  
  - yarn add koa-static   静态服务
  - yarn add koa-views ejs 视图模板渲染
  - yarn add koa2-cors 跨域配置

总体---- yarn add koa koa-router koa-bodyparser koa-better-body koa-static  koa-views ejs koa2-cors
  
yarn add mongoose
yarn add koa-generic-session koa-redis

总体：yarn add mongoose koa-generic-session koa-redis

// 发送邮件
yarn add nodemailer
```

# 热启动配置
yarn add nodemon
```js
// package.json
"scripts": {
  "start": "nodemon app.js"
}
```
运行npm start 热启动项目

# config.js进行关键常量的配置
1. 设置服务器端口
2. 设置数据库连接配置
3. 其他（待补充）

# 生成API文档，进行接口测试以及模型校对
1. [API文档](./API文档)
2. 设置路由并使用postman进行接口校对
3. 建立mongoose模型
   - 建立Schema，定义Schema是使用mongoose的开始，相当于是mongodb collection的映射
   - 创建model
   - 导出model
   - 使用时实例化model
4. 具体mongoose模型数据结构设计参考  
  - [model设计](./user-model.md)



