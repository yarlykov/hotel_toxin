module.exports = function (mode) {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: mode,
          },
        },
      ],
    },
  };
};
