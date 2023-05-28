const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 记事本
const Diary = seq.define('diary', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '日记主题'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '日记标题'
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '日记内容'
  }, 
  feel: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '心情'
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '日记时间'
  },
  weather: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '天气'
  },
})

// 强制同步数据库
// Diary.sync({force: true})

module.exports = Diary

