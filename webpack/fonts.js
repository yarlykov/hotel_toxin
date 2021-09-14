module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(ttf|woff|woff2|svg|eot)$/,
          exclude: [/images/],
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]',
          },
        },
      ],
    },
  };
};
