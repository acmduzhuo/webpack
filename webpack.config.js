const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    plugins : [
        htmlPlugin
    ],
    module:{//所有第三方模块的配置规则
        rules:[//第三方匹配规则
            {test: /\.js|jsx$/, use:'babel-loader', exclude:/node_modules/}
        ]
    }
}