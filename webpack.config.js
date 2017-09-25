const webpack = require('webpack');

module.exports = {
    entry: './test.js',
    output: {
        path: __dirname,
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
}