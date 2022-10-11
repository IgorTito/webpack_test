const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserlWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        open: true,

    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: '/index.pug'}),
        new TerserlWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Development'})
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserlWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, "css-loader"],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    mode: 'development'}
