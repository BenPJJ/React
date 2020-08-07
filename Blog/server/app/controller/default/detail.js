'use strict';

const Controller = require('egg').Controller;

class detailController extends Controller {
  async index () {
    this.ctx.body = '我是详情页接口'
  }
}

module.exports = detailController;