const webpack = require('webpack');
const path = require('path');

const caminhoAbsoluto = path.resolve(__dirname);

module.exports = {
     entry: './src/main.js',
     
     output: {
         path: './bin',
         filename: 'app.bundle.js'
     },

     devServer: {
        inline: true,
        port: 8080,
        hot: true
     },

     devtool: 'source-map',

      module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader'],
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
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
        alias: {
            'layouts': caminhoAbsoluto + '/src/layouts',
            'paginas': caminhoAbsoluto + '/src/paginas',
            'widgets': caminhoAbsoluto + '/src/widgets'
        },
        extensions: ['', '.js', '.jsx']
    }
 };