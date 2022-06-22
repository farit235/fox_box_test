const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const production = process.env.NODE_ENV === "poduction";

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: { scripts: "./index.js" },
  output: {
    filename: "./js/[name].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "../public/index.html" }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
  mode: production ? "production" : "development",
};
