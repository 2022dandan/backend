module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {

    default:
      break;
  }
  ctx.status = status
  ctx.body = err
}