const Router = require('koa-router')

const {getCollectInfo, editCollect ,getCollectAll} = require('../controller/collect.controller')
const router = new Router({prefix: '/collect'})
// 查询收藏夹内容
router.post('/viewCollect', getCollectInfo)
// 编辑界面 查找到相关收藏夹，然后修改text
router.post('/editCollect', editCollect)
// 查询所有收藏夹
router.post('/AllCollect', getCollectAll)
module.exports = router