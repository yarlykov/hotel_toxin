const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .map((item) => item.replace(/\.[^/.]+$/, ''));

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const IS_PRODUCTION = !IS_DEVELOPMENT;
console.log(IS_DEVELOPMENT);
console.log(IS_PRODUCTION);

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@variables': path.resolve(__dirname, 'src/styles/variables.scss'),
    },
  },
  devServer: {
    port: 8080,
    index: 'start-page.html',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|svg|eot)$/,
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
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          filename: `${page}.html`,
          template: `${PAGES_DIR}/${page}.pug`,
        })
    ),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/favicon', to: 'assets/favicon/' }],
    }),
  ],
};
