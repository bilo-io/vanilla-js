const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
    // eslint-disable-next-line node/no-path-concat
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }, {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/images/[name].[ext]'
            }, {
                test: /\.(mp4|mov|ogg)$/,
                use: 'file-loader?name=assets/videos/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
            // favicon: './src/assets/favicon.ico'
        })
    ]
}
