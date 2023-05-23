const NoteBook = require('../model/noteBook.model')

class NoteBookService {
    // 判断是是否重名
    async getNoteBookInfo(obj) {
        try {
            const whereOpt = {...obj}
            const res = await NoteBook.findOne({
                where: whereOpt
            })
            return res ? res.dataValues : null
        } catch (error) {
            console.log(error)
        }

    }
    // 创建笔记本 
    async createNoteBook(obj) {
        //  写入数据库
        const noteBook = await NoteBook.create({...obj, noteBook_type: JSON.stringify(obj.noteBook_type)})
        return noteBook?.dataValues
    }
    // 获取笔记本信息
    async getNoteBook(obj) {
        const whereOpt = {...obj}
        const res = await NoteBook.findOne({
        where: whereOpt
        })
        return res.dataValues
    }
    // 修改笔记本信息
    async updateNoteBookInfo({ user_name, noteBook_name, noteBook_parent, ...args }) {
        const res = await NoteBook.update(args, { where: { user_name, noteBook_name, noteBook_parent } })
        return res[0]
    }
    // 删除笔记本信息
    async deleteNoteBookInfo({ user_name, noteBook_name, noteBook_parent }) {
        const res = await NoteBook.destroy({ where: { user_name, noteBook_name, noteBook_parent } })
        return res[0]
    }
    // 获取文件列表信息
    async getNoteBookList(obj) {
        const whereOpt = {...obj}
        const res = await NoteBook.findAll({
        where: whereOpt
        })
        return res
    }
}

module.exports = new NoteBookService()