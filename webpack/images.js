module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: [/fonts/],
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext]',
          },
        },
      ],
    },
  };
};
