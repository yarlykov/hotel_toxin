module.exports = function (devMode) {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: devMode,
          },
        },
      ],
    },
  };
};
