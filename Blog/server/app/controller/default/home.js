'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 获取用户表的数据

    let result = await this.app.mysql.get('blog_content', {})
    console.log(result)
    this.ctx.body = result;
  }

  async getArticleList() {
    let sql = `SELECT article.id as id,
              article.title as title,
              article.introduce as introduce,
              article.addTime as addTime,
              type.typeName as typeName
              FROM article LEFT JOIN type ON article.type_id = type.Id`;

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results
    }
  }

  async addList() {
    const result = await this.app.mysql.insert('type', {
      typeName: '我的特长',
      orderNum: 4
    })

    let id = result.insertId;
    this.ctx.body = {
      result
    }
  }
}

module.exports = HomeController;