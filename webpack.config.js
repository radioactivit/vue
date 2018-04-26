const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const destination = path.resolve(__dirname, 'bin');

console.log(destination);

module.exports = {
    entry: './src/script.js',
    plugins: [
        new CleanWebpackPlugin(destination, { watch: true }),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: 'src/index.html'
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: destination
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
};
