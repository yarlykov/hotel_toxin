const path = require('path');

module.exports = function () {
  return {
    devServer: {
      static: {
        directory: path.join(__dirname, '../dist'),
        staticOptions: {
          index: 'start-page.html',
        },
      },
      port: 8081,
      open: true,
    },
  };
};
