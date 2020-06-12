const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    index: "form_elements.html",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
        exclude: [/fonts/],
      },
      {
        test: /\.(ttf|woff|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/colors_type/colors_type.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers_footers/headers_footers.pug',
      filename: 'headers_footers.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form_elements/form_elements.pug',
      filename: 'form_elements.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards/cards.pug',
      filename: 'cards.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
