const Router = require('koa-router')
const { verifyNoteCard } = require('../middleware/noteCard.middleware')
const { createNoteCard, deleteNoteCard, reviceNoteCard,getNoteCardInfo,getCardAll,changeCollect,getCollect} = require('../controller/noteCard.controller')
const router = new Router({prefix: '/note'})
// 添加卡片
router.post('/createNoteCard', verifyNoteCard, createNoteCard)
// 删除卡片
router.post('/deleteNoteCard',deleteNoteCard)
// 查询卡片
router.post('/viewNoteCard',getNoteCardInfo)
// 修改卡片详情  首先判断修改名字是否重复，再将信息存入数据库
router.post('/reviceNoteCard',reviceNoteCard)
// 查询所有卡片
router.post('/AllCard', getCardAll)
// 收藏夹判定
router.post('/collectNoteCard', changeCollect)
// 获取收藏夹卡片
router.post('/getCollectNoteCard', getCollect)
module.exports = router