module.exports = app => {
  const { router, controller } = app;
  let adminauth = app.middlewares.adminauth();

  router.post('/admin/checkLogin',adminauth, controller.admin.main.checkLogin);
}