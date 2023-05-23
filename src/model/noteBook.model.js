const { DataTypes } = require('sequelize')

const seq = require('../db/seq')
// 笔记本记录
const NoteBook = seq.define('noteBook', {
  // id会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名称'
  },
  noteBook_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文件名称'
  },
  noteBook_category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '种类'
    // 文件
  }, 
  noteBook_parent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '文件所属文件'
  },
  noteBook_type: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '文件分类'
  },
  noteBook_haveType: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: '文件有哪些类别'
  },
  noteBook_content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '文件详情'
  },
})

// 强制同步数据库
// NoteBook.sync({force: true})

module.exports = NoteBook