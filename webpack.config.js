const webpack = require('webpack');
const path = require('path');

module.exports = {
     entry: './src/main.js',
     
     output: {
         path: './bin',
         filename: 'app.bundle.js',
         sourceMapFilename: 'app.bundle.js.map'
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
        root: path.resolve(__dirname, './src'),
        alias: {
            'layouts': './src/layouts',
            'paginas': './src/paginas',
            'widgets': './src/widgets'
        },
        extensions: ['', '.js', '.jsx']
    },
 };