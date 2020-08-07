'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async checkLogin() {
    let userName = this.ctx.request.body.userName;
    let password = this.ctx.request.body.password;
    const sql = `SELECT userName FROM user WHERE userName = '${userName}' AND password = '${password}'`;

    const res = await this.app.mysql.query(sql);

    if (res.length > 0) {
      // 登录成功，进行session缓存
      let openId = new Date().getTime();
      this.ctx.session.openId = { 'openId': openId };
      this.ctx.body = { 'error_code': 0, 'data': {'openId': openId } };
    } else {
      this.ctx.body = { 'error_code': 200, 'data': {} };
    }
  }
}

module.exports = MainController;