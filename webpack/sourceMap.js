const webpack = require('webpack');

module.exports = function () {
  return {
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
      }),
    ],
  };
};
