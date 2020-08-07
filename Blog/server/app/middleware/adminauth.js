module.exports = (options, app) => {
  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId, '123')
    if (ctx.session.openId) {
      await next()
    } else {
      ctx.body = { 'error_code': 200, 'data': 'as' };
    }
  }
}