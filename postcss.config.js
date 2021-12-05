/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const devMode = process.env.NODE_ENV === 'development';

const devOptions = [
  require('autoprefixer'),
];

const productionOptions = [
  require('autoprefixer'),
  require('css-mqpacker'),
  require('cssnano')({
    preset: [
      'default', {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  }),
];

module.exports = {
  plugins: devMode ? devOptions : productionOptions,
};
