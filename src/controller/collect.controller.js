const jwt = require('jsonwebtoken')
const { createCollect, getCollect,deleteCollectInfo, getCollectList,editCollectInfo} = require('../service/collect.service')

class CollectController {
  // 创建收藏夹
  async createCollect(ctx, next) {
    const body = ctx.request.body
    try {
        await createCollect(body)
        ctx.body = {
            code: 0,
            message: '收藏成功',
            result: {
            }
        }
    }catch(err) {
      console.error('创建失败', err)
    }
  }
  // 获取收藏夹信息
  async getCollectInfo(ctx, next) {
    const { user_name, id } = ctx.request.body
    try {
        const res = await getCollect({user_name, id})
        console.log(res);
        ctx.body = {
            code: 0,
            message: '获取收藏夹信息',
            result: res
        }
    }catch(err) {
      console.error('收藏夹信息获取失败', err)
    }
  }
  //删除收藏夹
  async deleteCollect(ctx, next) {
    const body = ctx.request.body
    try {
        await deleteCollectInfo(body)
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
  // 查询当前用户的所有收藏夹
  async getCollectAll(ctx, next) {
    const { user_name, Collect_parent } = ctx.request.body
    try {
        const res = await getCollectList({user_name,Collect_parent})
        ctx.body = {
            code: 0,
            message: '获取收藏夹信息',
            result: res
        }
    }catch(err) {
      console.error('收藏夹信息获取失败', err)
    }
  }
  // 修改收藏夹内容
  async editCollect(ctx, next) {
    const body = ctx.request.body
    try {
        await editCollectInfo(body)
        ctx.body = {
            code: 0,
            message: '修改内容成功',
            result: {
            }
        }
    }catch(err) {
      console.error('收藏夹内容修改失败', err)
    }
  } 
}

module.exports = new CollectController()