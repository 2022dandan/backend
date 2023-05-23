const jwt = require('jsonwebtoken')
const { createNoteCard, getNoteCard ,updateNoteCardInfo,deleteNoteCardInfo,getNoteCardList} = require('../service/noteCard.service')

class NoteCardController {
  // 创建卡片
  async createNoteCard(ctx, next) {
    const body = ctx.request.body
    try {
        await createNoteCard(body)
        ctx.body = {
            code: 0,
            message: '创建文件成功',
            result: {
            }
        }
    }catch(err) {
      console.error('创建失败', err)
    }
  }
  // 修改卡片信息
  async reviceNoteCard(ctx, next) {
    const body = ctx.request.body
    try {
        await updateNoteCardInfo(body)
        ctx.body = {
            code: 0,
            message: '修改信息成功',
            result: {
            }
        }
    }catch(err) {
      console.error('修改信息失败', err)
    }
  } 
  // 获取卡片信息
  async getNoteCardInfo(ctx, next) {
    const { user_name, noteCard_name, noteCard_parent } = ctx.request.body
    try {
        const res = await getNoteCard({user_name, noteCard_name, noteCard_parent})
        ctx.body = {
            code: 0,
            message: '获取笔记信息',
            result: {
              id: res.id,
              user_name:res.userCard_name,
              noteCard_name:res.noteCard_name,
              noteCard_category:res.noteCard_category,
              noteCard_parent:res.noteCard_parent,
              noteCard_type:res.noteCard_type,
              noteCard_content:res.noteCard_content,
              noteCard_detail:res.noteCard_detail,
              createNoteCard:res.createAt,
              updateNoteCard:res.updateAt,
            }
        }
    }catch(err) {
      console.error('笔记信息获取失败', err)
    }
  }
  //删除卡片
  async deleteNoteCard(ctx, next) {
    const body = ctx.request.body
    try {
        await deleteNoteCardInfo(body)
        ctx.body = {
            code: 0,
            message: '删除成功',
            result: {
            }
        }
    }catch(err) {
      console.error('删除失败', err)
    }
  }
  // 获取当前用户文件中的所有卡片
  async getCardAll(ctx, next) {
    const { user_name, card_parent } = ctx.request.body
    try {
        const res = await getNoteCardList({user_name,card_parent})
        ctx.body = {
            code: 0,
            message: '获取当前文件所有卡片信息',
            result: res
        }
    }catch(err) {
      console.error('当前文件所有卡片信息获取失败', err)
    }
  }
}

module.exports = new NoteCardController()