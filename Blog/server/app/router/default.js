module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/detail', controller.default.detail.index);
  router.get('/default/article', controller.default.home.getArticleList);
  router.get('/default/addList', controller.default.home.addList);
}