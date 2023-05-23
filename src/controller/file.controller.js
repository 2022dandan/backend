const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
// const { uploadImg } = require('../service/file.service')

class FileController {
    // 上传文件
    async uploadFile(ctx){
        try {
            // const body = ctx.request.body
            const file = ctx.request.files.file; // 获取上传文件
            const name = file.name.split('.')
            // 创建可读流
            const reader = fs.createReadStream(file.path);
            const random = new Date().getTime()
            const fileName = name[0] + '[' + random + ']' + '.' + name[1]
            let filePath = path.join(__dirname, '../app/public/upload/') + `/${fileName}`
            
            // 创建可写流
            const upStream = fs.createWriteStream(filePath)
            // 可读流通过管道写入可写流
            reader.pipe(upStream)

            const url = `${ctx.origin}/upload/${fileName}`
            ctx.body = {
                "errno": 0, // 注意：值是数字，不能是字符串
                "data": {
                    url,
                    alt: fileName,
                }
            }
        }catch(err) {
            console.error('上传文件失败', err)
        }
    }
}

module.exports = new FileController()