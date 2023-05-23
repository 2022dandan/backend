const Router = require('koa-router')
const {createDiary,reviceDiary,getAllDiary,deleteDiary} = require('../controller/diary.controller')
const router = new Router({prefix: '/diary'})
// 添加事件
router.post('/createDiary', createDiary)
// 修改事件详情  根据ID，再将信息存入数据库
router.post('/reviceDiary', reviceDiary)
// // 查询单个事件的具体内容
// router.post('/viewDiary',getDiary)
// // 查询用户的所有事件
router.post('/allDiary', getAllDiary)
// // 查询某天的所有事件
// router.post('/dayDiary', getDayDiary)
// // 删除事件
router.post('/deleteDiary', deleteDiary)
module.exports = router

