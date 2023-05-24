const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const UserInfo = seq.define('userInfo', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一'
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '用户头像地址'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '邮箱'
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '性别'
  },
  hobby: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '个人爱好'
  },
  motto: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '座右铭'
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: '年龄'
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: '生日'
  },

})

// 强制同步数据库
// UserInfo.sync({force: true})

module.exports = UserInfo
