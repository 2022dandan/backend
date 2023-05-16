const Koa = require('koa')
const koaBody = require('koa-body')

const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')
const app = new Koa()

// 引用路由和插件
app
  .use(koaBody())
  .use(userRouter.routes())

// 统一的错误处理
app.on('error', errHandler)


module.exports = app
