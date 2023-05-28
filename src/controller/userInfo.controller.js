const jwt = require('jsonwebtoken')
const { updateUserInfo, getUserInfo } = require('../service/userInfo.service')

class UserInfoController {
  async getUserInfo(ctx, next) {
    // 1. 获取用户信息
    const { user_name } = ctx.query
    try {
      console.log(user_name,"//////")
        const res = await getUserInfo({user_name})
        ctx.body = {
            code: 0,
            message: '获取用户信息',
            result: {
                id: res.id,
                name: res.user_name,
                avatar: res.avatar,
                email: res.email,
                sex: res.sex,
                hobby: res.hobby,
                motto: res.motto,
                age: res.age,
                birthday: res.birthday,
            }
        }
    }catch(err) {
      console.error('用户信息获取失败', err)
    }
  }
  async editUserInfo(ctx, next) {
    // 1. 修改信息
    const body = ctx.request.body
    try {
        await updateUserInfo(body)
        ctx.body = {
            code: 0,
            message: '修改信息成功',
            result: {
            }
        }
    }catch(err) {
      console.error('用户信息获取失败', err)
    }
  }
}

module.exports = new UserInfoController()