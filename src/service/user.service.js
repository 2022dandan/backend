const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    //  写入数据库
    const user = await User.create({user_name, password})
    
    return user.dataValues
  }
  async getUserInfo(obj) {
    const whereOpt = {...obj}
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })
    return res ? res.dataValues : null
  }
  async updateById({id, ...params}) {
    const whereOpt = { id }
    const res = await User.update(params, {where: whereOpt})
    
    return Boolean(res[0])
  }
}

module.exports = new UserService()