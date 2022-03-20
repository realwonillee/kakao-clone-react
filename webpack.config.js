const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),

    // 빌드 결과물을 dist/main.js에 위치
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },

    // 디버깅을 위해 빌드 결과물에 소스맵 추가
    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        overlay: true,
        contentBase: './public',
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
        host: 'localhost',
        port: 3000,
    },

    resolve: {
        // 파일 확장자 처리
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'build-dev', 'index.html'),
        }),
        // For typescript
        // new ForkTsCheckerWebpackPlugin({ silent: true }),
    ],
};
