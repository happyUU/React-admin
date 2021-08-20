const {override, fixBabelImports,addLessLoader} = require('customize-cra');


module.exports = override(
    //针对antd实现按需打包，根据i mport来打包（使用bable-pluging-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,   //自动打包的样式
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
);
