const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
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
        test: /\.(scss|sass)$/,
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
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          }
        }
      },
      {
        test: /\.(ttf|woff|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/ui-kit-colors-type.pug',
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
    new HtmlWebpackPlugin({
      template: './src/pages/error-page/error-page.pug',
      filename: 'error-page.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      '$': 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': "jquery",
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/favicon', to: 'assets/favicon/'},
      ]
    })
  ],
};
