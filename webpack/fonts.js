module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(ttf|woff|woff2|svg|eot)$/,
          exclude: [/images/],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      ],
    },
  };
};
