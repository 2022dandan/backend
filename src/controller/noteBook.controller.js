const jwt = require('jsonwebtoken')
const { createNoteBook, updateNoteBookInfo, getNoteBook, deleteNoteBookInfo,getNoteBookList} = require('../service/noteBook.service')

class NoteBookController {
  // 创建文件
  async createNoteBook(ctx, next) {
    const body = ctx.request.body
    try {
        await createNoteBook(body)
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
  // 修改笔记本信息
  async reviceNoteBook(ctx, next) {
    const body = ctx.request.body
    try {
        await updateNoteBookInfo(body)
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
  // 获取笔记信息
  async getNoteBookInfo(ctx, next) {
    const { user_name, noteBook_name, noteBook_parent } = ctx.request.body
    try {
        const res = await getNoteBook({user_name, noteBook_name, noteBook_parent})
        ctx.body = {
            code: 0,
            message: '获取笔记信息',
            result: {
              id: res.id,
              user_name:res.userBook_name,
              noteBook_name:res.noteBook_name,
              noteBook_category:res.noteBook_category,
              noteBook_parent:res.noteBook_parent,
              noteBook_type:res.noteBook_type,
              noteBook_content:res.noteBook_content,
              noteBook_detail:res.noteBook_detail,
              createNoteBook:res.createAt,
              updateNoteBook:res.updateAt,
            }
        }
    }catch(err) {
      console.error('笔记信息获取失败', err)
    }
  }
  //删除笔记
  async deleteNoteBook(ctx, next) {
    const body = ctx.request.body
    try {
        await deleteNoteBookInfo(body)
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
  async getNoteBookAll(ctx, next) {
    const { user_name, noteBook_parent } = ctx.request.body
    try {
        const res = await getNoteBookList({user_name,noteBook_parent})
        ctx.body = {
            code: 0,
            message: '获取文件信息',
            result: res
        }
    }catch(err) {
      console.error('文件获取失败', err)
    }
  }
}

module.exports = new NoteBookController()