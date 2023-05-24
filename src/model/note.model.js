const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 笔记本
const Note = seq.define('note', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  note_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '笔记名称'
  },
  note_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '种类'
    // 笔记
  },
  note_cover: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '封面'
  },
  note_parent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '笔记所属文件'
  },
  note_type: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '笔记分类'
  },
  note_title: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '笔记概述'
  },
  note_content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '笔记概述'
  },
  note_time: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: '笔记创建时间'
  },
  note_details: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '笔记内容详情'
  },
})

// 强制同步数据库
// Note.sync({force: true})

module.exports = Note
