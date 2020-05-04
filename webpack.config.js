const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: "./Colors_Type/src/index.js" },
  output: {
    path: path.resolve(__dirname, "./Colors_Type/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './Colors_Type/src/index.html',
  })],
};
