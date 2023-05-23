const Cale = require('../model/cale.model')

class CaleService {
    async createCale(obj) {
        //  写入数据库
        const cale = await Cale.create(obj)
        return cale?.dataValues
    }
    async getAllCale(obj) {
        const res = await Cale.findAll({
            where: obj
        })
        return res
    }
    async updateCaleInfo({ user_name, id, ...args }) {
        const res = await Cale.update(args, { where: { user_name, id } })
        return res[0]
    }
    // 删除事件信息
    async deleteCaleInfo({ id }) {
        console.log(id);
        const res = await Cale.destroy( { where: { id } })
        return res[0]
    }
}
module.exports = new CaleService()