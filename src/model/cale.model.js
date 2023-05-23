const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 记事本
const Cale = seq.define('cale', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '事件主题'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '事件内容'
  }, 
  address: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '事件地点'
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '事件时间'
  },
  degree: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '事件紧急程度'
  },
})

// 强制同步数据库
// Cale.sync({force: true})

module.exports = Cale
