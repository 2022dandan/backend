const Collect = require('../model/collect.model')
class CollectService {
    // 创建收藏夹
    async createCollect(obj) {
        //  写入数据库
        const collect = await Collect.create({...obj})
        return collect?.dataValues
    }
    // 获取笔记列表信息
    async getCollectList(obj) {
        const whereOpt = {...obj}
        const res = await Collect.findAll({
        where: whereOpt
        })
        return res
    }
    // 获取单个数据
    async getNote(obj) {
        const whereOpt = {...obj}
        const res = await Collect.findOne({
        where: whereOpt
        })
        return res.dataValues
    }
    // 删除收藏信息
    async deleteCollectInfo({ file_id, user_name, name }) {
        const res = await Collect.destroy( { where: { file_id, user_name, name } })
        return res[0]
    }
    // 修改笔记内容
    async editCollectInfo({ user_name, id, ...args }) {
        const res = await Collect.update(args, { where: { user_name, id } })
        return res[0]
    }
}

module.exports = new CollectService()