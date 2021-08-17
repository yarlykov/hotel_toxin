const webpack = require('webpack');

module.exports = function () {
  return {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
    ],
  };
};
