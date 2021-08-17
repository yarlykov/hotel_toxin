import Dropdown from './dropdown';

const comfortDropdownNodes = document.querySelectorAll('[data-group="comfort"]');
const comfortOptions = {
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
};

if (comfortDropdownNodes.length > 0) {
  comfortDropdownNodes.forEach((element) => new Dropdown(element, comfortOptions));
}

const guestsDropdownNodes = document.querySelectorAll('[data-group="guests"]');
const guestsOptions = {
  type: 'guests',
  defaultText: 'Сколько гостей',
  minItems: 0,
  maxItems: 20,
  buttons: true,
  plurals: {
    guests: ['гость', 'гостя', 'гостей'],
    babies: ['младенец', 'младенца', 'младенцев'],
  },
};

if (guestsDropdownNodes.length > 0) {
  guestsDropdownNodes.forEach((element) => new Dropdown(element, guestsOptions));
}
