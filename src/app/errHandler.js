const { userRegisterError } = require("../constants/err.type");

module.exports = (err, ctx) => {
  let status = 200
  switch (err && err.code) {

    default:
      break;
  }
  ctx.status = status
  ctx.body = err
}