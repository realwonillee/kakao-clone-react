const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),

  // 빌드 결과물을 dist/main.js에 위치
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: "source-map",

  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    // For typescript
    // new ForkTsCheckerWebpackPlugin({ silent: true }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
