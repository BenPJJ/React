'use strict';

/**
 * 配置插件
 */

// 连接数据库
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

// 解决跨域
exports.cors = {
  enable: true,
  package: 'egg-cors'
}

