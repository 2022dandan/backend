
const bcrypt = require('bcryptjs')
const {getUserInfo} = require('../service/user.service')
const {userFormatError, userAlreadyExisted, userNotExist, userLoginError, invalidPasswrod} = require('../constants/err.type')

// 验证输入是否正确
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 验证合理性
  if(!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body )
    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  await next()
}

// 验证用户是否已存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  // 是否已存在
  if(await getUserInfo({user_name})) { // 已经存在则返回
    ctx.app.emit('error', userAlreadyExisted, ctx)
    return
  }
  await next()
}

// 密码加密
const cryptPassword = async (ctx, next) => {
  try {
    const { password } = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    // hash 保存的是密文
    const hash = bcrypt.hashSync(String(password), salt)
    ctx.request.body.password = hash
    await next()
  } catch (error) {
    console.log(error)
  }
}

// 验证登录
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  try {
    // 1.判断用户是否存在（不存在报错）
    const res = await getUserInfo({user_name})
    if(!res) {
      console.error('用户名不存在', {user_name})
      ctx.app.emit('error', userNotExist, ctx)
      return
    }
    // 2.密码是否匹配
    if(!bcrypt.compareSync(String(password), res.password)) {
      ctx.app.emit('error', invalidPasswrod, ctx)
      return
    }
  } catch(err) {
    console.log(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}


module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin
}
