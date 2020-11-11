module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: [/fonts/],
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        },
      ],
    },
  };
};
