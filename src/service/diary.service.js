const Diary = require('../model/diary.model')
class DiaryService {
    async createDiary(obj) {
        //  写入数据库
        const diary = await Diary.create(obj)
        return diary?.dataValues
    }
    async getAllDiary(obj) {
        const res = await Diary.findAll({
            where: obj
        })
        return res
    }
    async updateDiaryInfo({ user_name, id, ...args }) {
        const res = await Diary.update(args, { where: { user_name, id } })
        return res[0]
    }
    // 删除事件信息
    async deleteDiaryInfo({ id }) {
        console.log(id);
        const res = await Diary.destroy( { where: { id } })
        return res[0]
    }
}
module.exports = new DiaryService()