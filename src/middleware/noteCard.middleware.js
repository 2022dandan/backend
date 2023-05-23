
const { userAlreadyExisted } = require('../constants/err.type')
const {getNoteCardInfo} = require('../service/noteCard.service')

// 验证是否存在笔记是否已存在
const verifyNoteCard = async (ctx, next) => {
  try {
    const { user_name, card_name, card_parent } = ctx.request.body
    // 是否已存在
    if(await getNoteCardInfo({user_name, card_name, card_parent})) { // 已经存在则返回
      console.log('error alreadyExisted')
      ctx.app.emit('error', userAlreadyExisted, ctx)
      return
    }
    await next()
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
    verifyNoteCard
}