module.exports = (ctx, next) => {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = {
        code: 0,
        message: 'Not authorized'
      }
    } else {
      throw err
    }
  })
}
