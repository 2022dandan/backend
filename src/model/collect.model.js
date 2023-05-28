const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 收藏夹
const Collect = seq.define('collect', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '种类'
  },
  file_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文件名称'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '笔记概述'
  },
})

// 强制同步数据库
// Collect.sync({force: true})

module.exports = Collect
