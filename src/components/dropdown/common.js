import Dropdown from './dropdown';

$.fn.dropdown = function (options) {
  return this.each(function () {
    new Dropdown(this, options);
  });
};

$('.js-dropdown__comfort').dropdown({
  type: 'comfort',
  defaultText: 'Удобства номера',
  minItems: 0,
  maxItems: 20,
  buttons: false,
  plurals: {
    bedrooms: ['спальня', 'спальни', 'спален'],
    beds: ['кровать', 'кровати', 'кроватей'],
    baths: ['ванная комната', 'ванных комнаты', 'ванных комнат'],
  },
});

$('.js-dropdown__guests').dropdown({
  type: 'guests',
  defaultText: 'Сколько гостей',
  minItems: 0,
  maxItems: 20,
  buttons: true,
  plurals: {
    guests: ['гость', 'гостя', 'гостей'],
    babies: ['младенец', 'младенца', 'младенцев'],
  },
});
