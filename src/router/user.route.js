const Router = require('koa-router')

const router = new Router({prefix: '/users'})

const { userValidator, verifyUser, cryptPassword, verifyLogin } = require('../middleware/user.middleware')
const { register, login, changePassword } = require('../controller/user.controller')
const { auth } = require('../middleware/auth.middleware')

// 注册接口, 验证格式， 判断用户是否存在，不存在创建初始根文件夹
router.post('/register', userValidator, verifyUser, cryptPassword, register)
// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 修改密码接口
router.patch('/', auth, cryptPassword, changePassword)

module.exports = router