const Router = require('koa-router')
const { verifyNoteBook } = require('../middleware/noteBook.middleware')
const { createNoteBook, deleteNoteBook, reviceNoteBook,getNoteBookInfo, getNoteBookAll} = require('../controller/noteBook.controller')
const router = new Router({prefix: '/note'})
// 添加笔记本
router.post('/createNoteBook', verifyNoteBook, createNoteBook)
// 删除笔记本 
router.post('/deleteNoteBook',deleteNoteBook)
// 查询文件内容
router.post('/viewNoteBook',getNoteBookInfo)
// 修改文件详情  首先判断修改名字是否重复，再将信息存入数据库
router.post('/reviseNoteBook',reviceNoteBook)
// 查询所有文件
router.post('/AllNoteBook', getNoteBookAll)
module.exports = router