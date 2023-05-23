const Router = require('koa-router')
const { uploadFile } = require('../controller/file.controller')
const router = new Router({prefix: '/file'})
// 上传图片
router.post('/uploadImg', uploadFile)
module.exports = router