const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 卡片记录
const NoteCard = seq.define('noteCard', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  card_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '卡片名称'
  },
  card_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '种类'
    // 卡片
  }, 
  card_parent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '卡片所属文件'
  },
  card_type: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '卡片分类'
    // 所属分类
  },
  card_content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '卡片记事'
  },
  card_time: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: '卡片创建时间'
  },
})

// 强制同步数据库
// NoteCard.sync({force: true})

module.exports = NoteCard