const Koa = require('koa')
const path = require('path')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')

const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')
const userInfoRouter = require('../router/userInfo.route')
const noteBookRouter = require('../router/noteBook.route')
const noteCardRouter = require('../router/noteCard.route')
const noteRouter = require('../router/note.route')
const caleRouter = require('../router/cale.route')
const diaryRouter = require('../router/diary.route')
const fileRouter = require('../router/file.route')
const app = new Koa()
const { cors } = require('./utils')


// 引用路由和插件
app
  .use(cors)
  .use(koaBody({
    enableTypes: ['json', 'form', 'text'],
    multipart: true
  }))
  .use(koaStatic(path.join(__dirname, 'public')))
  .use(userRouter.routes())
  .use(userInfoRouter.routes())
  .use(noteBookRouter.routes())
  .use(noteCardRouter.routes())
  .use(noteRouter.routes())
  .use(caleRouter.routes())
  .use(diaryRouter.routes())
  .use(fileRouter.routes())
// 统一的错误处理
app.on('error', errHandler)


module.exports = app
