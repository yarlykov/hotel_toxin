const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(mode) {
  return {
    module: {
      rules: [
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: mode },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: mode },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: mode },
            },
          ],
        },
      ],
    },
  };
}