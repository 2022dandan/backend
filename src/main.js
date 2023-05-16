

const { APP_PORT } = require('./config/config.default')
const app = require('./app/index')

app.listen(APP_PORT, () => {
  console.log(`${APP_PORT}端口开启, 地址: http://localhost:${APP_PORT}`)
})