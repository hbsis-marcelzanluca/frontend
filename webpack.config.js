const webpack = require('webpack');

module.exports = {
     entry: './src/main.js',
     
     output: {
         path: './bin',
         filename: 'app.bundle.js'
     },

     devServer: {
        inline: true,
        port: 8080
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