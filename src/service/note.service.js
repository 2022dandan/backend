const Note = require('../model/note.model')

class NoteService {
    // 判断是笔记否重名
    async getNoteInfo(obj) {
        try {
            const whereOpt = {...obj}
            const res = await Note.findOne({
                where: whereOpt
            })
            return res ? res.dataValues : null
        } catch (error) {
            console.log(error)
        }
    }
    // 创建笔记
    async createNote(obj) {
        //  写入数据库
        const note = await Note.create({...obj, note_type: JSON.stringify(obj.note_type)})
        return note?.dataValues
    }
    // 获取笔记列表信息
    async getNoteList(obj) {
        const whereOpt = {...obj}
        const res = await Note.findAll({
        where: whereOpt
        })
        return res
    }
    // 获取收藏列表
    async getCollectNote(obj){
        const whereOpt = {...obj}
        const res = await Note.findAll({
        where: whereOpt
        })
        return res
    }
    // 获取卡片信息
    async getNote(obj) {
        const whereOpt = {...obj}
        const res = await Note.findOne({
        where: whereOpt
        })
        return res.dataValues
    }
    // 修改笔记信息
    async updateNoteInfo({ user_name, note_name, note_parent, ...args }) {
        const res = await Note.update(args, { where: { user_name, note_name, note_parent } })
        return res[0]
    }
    // 笔记收藏信息
    async updateNoteCollect({ id,user_name, note_name, note_parent, ...args }) {
        const res = await Note.update(args, { where: { id, user_name, note_name, note_parent } })
        return res[0]
    }
    // 删除笔记信息
    async deleteNoteInfo({ user_name, note_name, note_parent }) {
        const res = await Note.destroy( { where: { user_name, note_name, note_parent } })
        return res[0]
    }
    // 修改笔记内容
    async editNoteInfo({ user_name, id, ...args }) {
        const res = await Note.update(args, { where: { user_name, id } })
        return res[0]
    }
}

module.exports = new NoteService()