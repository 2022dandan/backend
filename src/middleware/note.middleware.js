
const { userAlreadyExisted } = require('../constants/err.type')
const {getNoteInfo} = require('../service/note.service')

// 验证是否存在笔记是否已存在
const verifyNote = async (ctx, next) => {
  const { user_name, note_name, note_parent } = ctx.request.body
  // 是否已存在
  if(await getNoteInfo({user_name, note_name, note_parent})) { // 已经存在则返回
    console.log('error alreadyExisted')
    ctx.app.emit('error', userAlreadyExisted, ctx)
    return
  }
  await next()
}

module.exports = {
    verifyNote
}