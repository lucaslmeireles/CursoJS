const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        path: path.resolve(__dirname, 'scr'),
        filename: 'index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};
