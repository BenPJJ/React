const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// 关闭sourcemap，打包后发现静态文件夹中会有很多css和js的map文件
// process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  // 关于webpack的相关配置
  fixBabelImports('import', {        
    libraryName: 'antd',        
    libraryDirectory: 'es',       
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,        
      ModifyVars: { 
          '@primary-color': '#1DA57A' 
      }   
    }
  })
);