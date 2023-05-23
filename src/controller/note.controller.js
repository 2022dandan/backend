const jwt = require('jsonwebtoken')
const { createNote, getNote, updateNoteInfo,deleteNoteInfo, getNoteList,editNoteInfo } = require('../service/note.service')

class NoteController {
  // 创建笔记
  async createNote(ctx, next) {
    const body = ctx.request.body
    try {
        await createNote(body)
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
  // 修改笔记信息
  async reviceNote(ctx, next) {
    const body = ctx.request.body
    try {
        await updateNoteInfo(body)
        ctx.body = {
            code: 0,
            message: '修改信息成功',
            result: {
            }
        }
    }catch(err) {
      console.error('笔记信息修改失败', err)
    }
  } 
  // 获取笔记信息
  async getNoteInfo(ctx, next) {
    const { user_name, id } = ctx.request.body
    try {
        const res = await getNote({user_name, id})
        console.log(res);
        ctx.body = {
            code: 0,
            message: '获取笔记信息',
            result: res
        }
    }catch(err) {
      console.error('笔记信息获取失败', err)
    }
  }
  //删除笔记
  async deleteNote(ctx, next) {
    const body = ctx.request.body
    try {
        await deleteNoteInfo(body)
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
  // 查询当前用户的所有笔记
  async getNoteAll(ctx, next) {
    const { user_name, note_parent } = ctx.request.body
    try {
        const res = await getNoteList({user_name,note_parent})
        ctx.body = {
            code: 0,
            message: '获取笔记信息',
            result: res
        }
    }catch(err) {
      console.error('笔记信息获取失败', err)
    }
  }
  // 修改笔记内容
  async editNote(ctx, next) {
    const body = ctx.request.body
    try {
        await editNoteInfo(body)
        ctx.body = {
            code: 0,
            message: '修改内容成功',
            result: {
            }
        }
    }catch(err) {
      console.error('笔记内容修改失败', err)
    }
  } 
}

module.exports = new NoteController()