const jwt = require('jsonwebtoken')
const { userRegisterError } = require('../constants/err.type')
const {createUser, getUserInfo, updateById} = require('../service/user.service')
const {getSongUrlById} = require('../service/song.service')

const {JWT_SECRET} = require('../config/config.default')
class UserController {
  async register(ctx, next) {
    // 获取数据
    const { user_name, password } = ctx.request.body
    try {
      // 操作数据库 service层
      const res = await createUser(user_name, password)
      // 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        }
      }
    }catch(err) {
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }
  async login(ctx, next) {
    const { user_name } = ctx.request.body
    // 1. 获取用户信息（在token的playload中，记录id、user_name、is_admin）
    try {
      const {password, ...res} = await getUserInfo({user_name})
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, {expiresIn: '1d' }) // 过期时间为1天
        }
      }
      
    }catch(err) {
      console.error('用户登录失败', err)
    }
  }
  async changePassword(ctx, next) {
    // 1. 获取数据
    const {id, is_admin} = ctx.state.user
    const password = ctx.request.body.password
    console.log(id, password)
    // 2. 操作数据库
    if(await updateById({id, password, is_admin})) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: ''
      }
    }else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: ''
      }
    }
    // 3. 返回结果
  }
}

module.exports = new UserController()