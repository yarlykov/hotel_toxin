const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const devServer = require('./webpack/devServer');
const stylesModule = require('./webpack/stylesModule');
const pugModule = require('./webpack/pugModule');
const imageModule = require('./webpack/imageModule');
const fontsModule = require('./webpack/fontsModule');
const jsModule = require('./webpack/jsModule');
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

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
}

const common = merge([
  {
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
  },
  stylesModule(IS_DEVELOPMENT),
  pugModule(IS_DEVELOPMENT),
  imageModule(),
  fontsModule(),
  jsModule(),
]);

module.exports = function() {
  if (IS_PRODUCTION) {
    return merge([
      common,
    ])
  }
  if (IS_DEVELOPMENT) {
    return merge([
      common,
      devServer(),
    ])
  }
}
