const NoteCard = require('../model/noteCard.model')

class NoteCardService {
    // 判断是是否重名
    async getNoteCardInfo(obj) {
        try {
            const whereOpt = {...obj}
            const res = await NoteCard.findOne({
                where: whereOpt
            })
            return res ? res?.dataValues : null
        } catch (error) {
            console.log(error)
        }
    }
    // 创建卡片
    async createNoteCard(obj) {
        //  写入数据库
        const noteCard = await NoteCard.create({...obj, card_type: JSON.stringify(obj.card_type)})
        return noteCard?.dataValues
    }
     // 获取卡片信息
     async getNoteCard(obj) {
        const whereOpt = {...obj}
        const res = await NoteCard.findOne({
        where: whereOpt
        })
        return res.dataValues
    }
    // 获取笔记信息
    async getNoteCardList(obj) {
        const whereOpt = {...obj}
        const res = await NoteCard.findAll({
        where: whereOpt
        })
        return res
    }
    // 笔记收藏信息
    async updateNoteCollect({ id, user_name, card_name, card_parent, ...args }) {
        const res = await NoteCard.update(args, { where: { id, user_name, card_name, card_parent } })
        return res[0]
    }
    async getCollectNoteCardList(obj){
        const whereOpt = {...obj}
        const res = await NoteCard.findAll({
        where: whereOpt
        })
        return res
    }
    // 修改卡片信息
    async updateNoteCardInfo({ user_name, card_name, card_parent, ...args }) {
        const res = await NoteCard.update(args, { where: { user_name, card_name, card_parent } })
        return res[0]
    }
    // 删除卡片信息
    async deleteNoteCardInfo({ user_name, card_name, card_parent }) {
        const res = await NoteCard.destroy({ where: { user_name, card_name, card_parent } })
        return res[0]
    }
}

module.exports = new NoteCardService()