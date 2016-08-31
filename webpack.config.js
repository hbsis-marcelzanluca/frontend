const webpack = require('webpack');

module.exports = {
     entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
     },

     output: {
         path: './bin',
         filename: 'app.bundle.js'
     },

      module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loaders: ['react-hot', 'babel-loader'],
         }]
     },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
 };