const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "inline-source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: path.join(__dirname, "./public"),
    open: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader", "style-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: "asset/resource",
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassingOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
