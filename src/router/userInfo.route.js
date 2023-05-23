const Router = require('koa-router')
const { getUserInfo, editUserInfo} = require('../controller/userInfo.controller')

const router = new Router({prefix: '/users'})

// 获取用户信息
router.get('/getUserInfo', getUserInfo)
// 修改用户信息
router.post('/editUserInfo', editUserInfo)

module.exports = router