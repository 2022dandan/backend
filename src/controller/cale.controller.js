const jwt = require('jsonwebtoken')
const { createCale, getAllCale,updateCaleInfo,deleteCaleInfo } = require('../service/cale.service')

class CaleController {
    // 创建事件
    async createCale(ctx){
        const body = ctx.request.body
        try {
            await createCale(body)
            ctx.body = {
                code: 0,
                message: '创建事件成功',
                result: {
                }
            }
        }catch(err) {
            console.error('创建事件失败', err)
        }
    }
    // 修改事件
    async reviceCale(ctx){
        const body = ctx.request.body
        try {
            await updateCaleInfo(body)
            ctx.body = {
                code: 0,
                message: '修改事件成功',
                result: {
                }
            }
        }catch(err) {
        console.error('事件修改失败', err)
        }
    }
    // 获取事件信息
    async getCale(ctx){
        
    }
    // 获取所有事件
    async getAllCale(ctx){
        const body = ctx.request.body
        try {
            const res = await getAllCale(body)
            ctx.body = {
                code: 0,
                message: '获取事件成功',
                result: res
            }
        }catch(err) {
            console.error('获取事件失败', err)
        }
    }
    // 获取整天事件
    async getDayCale(ctx){
        
    }
    // 删除事件
    async deleteCale(ctx){
        const body = ctx.request.body
        console.log(body);
        try {
            await deleteCaleInfo(body)
            ctx.body = {
                code: 0,
                message: '删除成功',
                result: {
                }
            }
        }catch(err) {
          console.error('删除失败', err)
        }
    }
}

module.exports = new CaleController()