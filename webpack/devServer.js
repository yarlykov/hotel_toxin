module.exports = function () {
  return {
    devServer: {
      static: './dist',
      port: 8081,
      open: '/start-page.html',
      hot: false,
    },
  };
};
