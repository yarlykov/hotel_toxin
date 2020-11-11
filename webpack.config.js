const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const devServer = require('./webpack/devServer');
const stylesModule = require('./webpack/stylesModule');
const postcss = require('./webpack/postcss');
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
      main: ['@babel/polyfill', `${PATHS.src}/index.js`],
    },
    output: {
      path: PATHS.dist,
      filename: IS_DEVELOPMENT ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    resolve: {
      alias: {
        '@variables': path.resolve(__dirname, `${PATHS.src}/styles/variables.scss`),
      },
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: IS_DEVELOPMENT ? '[name].css' : '[name].[contenthash].css',
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
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new CopyPlugin({
        patterns: [{ from: `${PATHS.src}/favicon`, to: 'assets/favicon/' }],
      }),
    ],
  },
  pugModule(IS_DEVELOPMENT),
  imageModule(),
  fontsModule(),
  jsModule(),
]);

module.exports = function() {
  if (IS_PRODUCTION) {
    return merge([
      common,
      postcss(),
    ])
  }
  if (IS_DEVELOPMENT) {
    return merge([
      common,
      stylesModule(),
      devServer(),
    ])
  }
}
