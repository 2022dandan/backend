const jwt = require('jsonwebtoken')
const { createDiary, getAllDiary,updateDiaryInfo,deleteDiaryInfo } = require('../service/diary.service')

class DiaryController {
    // 创建事件
    async createDiary(ctx){
        const body = ctx.request.body
        try {
            await createDiary(body)
            ctx.body = {
                code: 0,
                message: '创建日记成功',
                result: {
                }
            }
        }catch(err) {
            console.error('创建日记失败', err)
        }
    }
    // 修改事件
    async reviceDiary(ctx){
        const body = ctx.request.body
        try {
            await updateDiaryInfo(body)
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
    // 获取所有事件
    async getAllDiary(ctx){
        const body = ctx.request.body
        try {
            const res = await getAllDiary(body)
            ctx.body = {
                code: 0,
                message: '获取日历成功',
                result: res
            }
        }catch(err) {
            console.error('获取日历失败', err)
        }
    }
    // 删除事件
    async deleteDiary(ctx){
        const body = ctx.request.body
        console.log(body);
        try {
            await deleteDiaryInfo(body)
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

module.exports = new DiaryController()

