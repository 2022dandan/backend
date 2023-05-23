
const { userAlreadyExisted } = require('../constants/err.type')
const {getNoteBookInfo} = require('../service/noteBook.service')

// 验证是否存在笔记本是否已存在
const verifyNoteBook = async (ctx, next) => {
  const { user_name, noteBook_name, noteBook_parent } = ctx.request.body
  // 是否已存在
  if(await getNoteBookInfo({user_name, noteBook_name, noteBook_parent})) { // 已经存在则返回
    console.log('error alreadyExisted')
    ctx.app.emit('error', userAlreadyExisted, ctx)
    return
  }
  await next()
}


module.exports = {
    verifyNoteBook
}
