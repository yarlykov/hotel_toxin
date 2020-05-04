const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: { 
    main: './index.js',
    analytics: './analytics.js' 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new CleanWebpackPlugin()
],
};
