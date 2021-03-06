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
            {test: /\.js|jsx$/, use:'babel-loader', exclude:/node_modules/},
            //大家可以在CSS-loader之后，通过？增加参数，
            //其中有一个固定的参数，modules，表示为普通的CSS样式表，启用模块化
            //{test: /\.css$/, use: ['style-loader', { loader: 'css-loader',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'}}}]},
            //打包处理CSS样式表的第三方loader,从右到左调用，只有CSS-loader才有
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //不带loader是webpack1.版本的
            //hash防止类名重复
            {test:/\.ttf|woff|woff2|eot|svg$/, use:'url-loader'},
            {test: /\.scss$/, use:['style-loader', { loader: 'css-loader',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'}}},'sass-loader']} //打包处理scss的loader
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json', '.vue'],//固定写法，这几个文件的后缀名，可以省略不写
        alias:{
            '@':path.join(__dirname, './src') //这样，@就表示项目根目录中src的这一层路径
        }
    }
    //不加resolve，默认补全.js .json
}