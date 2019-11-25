const path = require('path')

module.exports = {
    entry: {
        home : './src/index.js',
        view : './src/recipe-view.js'
    },
    output: {
        path: path.resolve(__dirname , 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules : [{
            test: /\.js$/,
            exclude : /node_modules/,
            use : {
                loader : 'babel-loader',
                options : {
                    presets : ['@babel/env']
                }
            }
        }]
    },
    devServer : {
        contentBase : path.resolve(__dirname , 'public'),
        publicPath : '/scripts/'
    },
    devtool : 'source-map'
}