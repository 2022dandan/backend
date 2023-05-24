const Router = require('koa-router')
const { verifyNote } = require('../middleware/note.middleware')
const { createNote, reviceNote, getNoteInfo, deleteNote,getNoteAll,editNote} = require('../controller/note.controller')
const router = new Router({prefix: '/note'})
// 添加笔记
router.post('/createNote', verifyNote, createNote)
// 修改笔笔记详情  首先判断修改名字是否重复，再将信息存入数据库
router.post('/reviceNote', reviceNote)
// 查询笔记内容
router.post('/viewNote', getNoteInfo)
// 编辑界面 查找到相关笔记，然后修改text
router.post('/editNote', editNote)
// 查询所有笔记
router.post('/AllNote', getNoteAll)
// 删除笔记
router.post('/deleteNote', deleteNote)
module.exports = router