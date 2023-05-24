const UserInfo = require('../model/userInfo.model')

class UserInfoService {
  async createUserInfo(user_name, email) {
    //  写入数据库
    const userinfo = await UserInfo.create({user_name, email})
    return userinfo.dataValues
  }

  async getUserInfo(obj) {
    const whereOpt = {...obj}
    const res = await UserInfo.findOne({
      attributes: ['id', 'user_name', 'avatar', 'email' , 'sex', 'hobby', 'motto', 'age', 'birthday'],
      where: whereOpt
    })
    return res.dataValues
  }

  async updateUserInfo({ name: user_name, ...args }) {
    const res = await UserInfo.update(args, { where: { user_name } })
    return res[0]
  }
}

module.exports = new UserInfoService()