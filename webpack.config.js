const path = require( 'path' );

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname,
    entry: path.resolve('src/main.js'),
    watchOptions: {
        ignored: /node_modules/,
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader?url=false','postcss-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.[name].min.css'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'commons'
        }
    }
};