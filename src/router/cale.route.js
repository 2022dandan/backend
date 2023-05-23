const Router = require('koa-router')
const {createCale, getCale, getAllCale, getDayCale, deleteCale,reviceCale} = require('../controller/cale.controller')
const router = new Router({prefix: '/cale'})
// 添加事件
router.post('/createCale', createCale)
// 修改事件详情  根据ID，再将信息存入数据库
router.post('/reviceCale', reviceCale)
// // 查询单个事件的具体内容
// router.post('/viewCale',getCale)
// // 查询用户的所有事件
router.post('/allCale', getAllCale)
// // 查询某天的所有事件
// router.post('/dayCale', getDayCale)
// // 删除事件
router.post('/deleteCale', deleteCale)
module.exports = router