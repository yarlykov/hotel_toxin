/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */

class Dropdown {
  constructor(selector, options) {
    this.$mainNode = selector;
    this.options = options;

    this.init();
    this._setup();
  }

  _setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$mainNode.addEventListener('click', this.clickHandler);
  }

  init() {
    const { buttons } = this.options;

    this.totalItems = 0;
    this.maxItems = this.options.maxItems;
    this.menuItemValue = {
      baby: 0,
      bedrooms: 0,
      beds: 0,
      baths: 0,
    };
    this.menuItemRusNames = [
      'Младенцы',
      'Спальни',
      'Кровати',
      'Ванные комнаты',
    ];

    this.$input = this.$mainNode.querySelector('.dropdown__input');
    this.$drop = this.$mainNode.querySelector('.dropdown__drop');
    this.$menuItems = this.$mainNode.querySelectorAll('.dropdown__menu-item');
    this.$menuItem = Array.from(this.$menuItems).map((item) => ({
      increment: item.querySelector('.controls__increment'),
      decrement: item.querySelector('.controls__decrement'),
      countInput: item.querySelector('.controls__counter'),
      id: item.dataset.id,
      value: Number(item.querySelector('.controls__counter').value),

      isBabyValue:
        item.dataset.id === 'Младенцы'
          ? Number(item.querySelector('.controls__counter').value)
          : 0,
      isBedroomsValue:
        item.dataset.id === 'Спальни'
          ? Number(item.querySelector('.controls__counter').value)
          : 0,
      isBedsValue:
        item.dataset.id === 'Кровати'
          ? Number(item.querySelector('.controls__counter').value)
          : 0,
      isBathsValue:
        item.dataset.id === 'Ванные комнаты'
          ? Number(item.querySelector('.controls__counter').value)
          : 0,
    }));

    if (buttons) {
      this.addButtons();
    }

    this.startInputValue();
    this.inputTextGuests();
    this.inputTextComfort();
    this.delClearBtn();

    this.counter();
    this.disabledButtons();
  }

  startInputValue() {
    const itemsQuantity = this.$menuItem.reduce(
      (acc, item) => item.value + acc, 0,
    );
    const babiesQuantity = this.$menuItem.reduce(
      (acc, item) => item.isBabyValue + acc,
      0,
    );
    const bedroomsQuantity = this.$menuItem.reduce(
      (acc, item) => item.isBedroomsValue + acc,
      0,
    );
    const bedsQuantity = this.$menuItem.reduce(
      (acc, item) => item.isBedsValue + acc,
      0,
    );
    const bathsQuantity = this.$menuItem.reduce(
      (acc, item) => item.isBathsValue + acc,
      0,
    );

    this.totalItems = itemsQuantity;
    this.menuItemValue.baby = babiesQuantity;
    this.menuItemValue.bedrooms = bedroomsQuantity;
    this.menuItemValue.beds = bedsQuantity;
    this.menuItemValue.baths = bathsQuantity;
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');

    btnWrap.classList.add('js-buttons-dropdown__wrapper');

    clearBtn.classList.add(
      'button_inline',
      'js-buttons-dropdown__button_clear',
    );
    clearBtn.setAttribute('type', 'button');
    clearBtn.setAttribute('data-type', 'clear');
    clearBtn.innerHTML = 'Очистить';

    applyBtn.classList.add('button_inline');
    applyBtn.setAttribute('type', 'button');
    applyBtn.setAttribute('data-type', 'apply');
    applyBtn.innerHTML = 'Применить';

    btnWrap.appendChild(clearBtn);
    btnWrap.appendChild(applyBtn);
    this.$drop.appendChild(btnWrap);

    this.clearBtn = this.$mainNode.querySelector(
      '.js-buttons-dropdown__button_clear',
    );
  }

  counter() {
    const that = this;

    this.$menuItem.forEach((item) => {
      const amount = item.countInput;

      item.increment.addEventListener('click', () => {
        const currentValue = Number(amount.value);

        if (that.totalItems < that.maxItems) {
          amount.value = currentValue + 1;
          that.totalItems += 1;

          that.itemCounter(item.id, 'increment');
        }

        that.inputTextGuests();
        that.delClearBtn();
        that.disabledButtons();
        that.inputTextComfort();
      });

      item.decrement.addEventListener('click', () => {
        const currentValue = Number(amount.value);

        if (currentValue > 0) {
          amount.value = currentValue - 1;
          that.totalItems -= 1;

          that.itemCounter(item.id, 'decrement');

          that.inputTextGuests();
          that.delClearBtn();
          that.disabledButtons();
          that.inputTextComfort();
        }
      });
    });
  }

  itemCounter(id, operator) {
    const menuItemEngName = Object.keys(this.menuItemValue);
    const index = this.menuItemRusNames.indexOf(id);
    const translateId = menuItemEngName[index];

    if (operator === 'increment') {
      this.menuItemValue[translateId] += 1;
    } else {
      this.menuItemValue[translateId] -= 1;
    }
  }

  inputTextGuests() {
    const { maxItems, defaultText } = this.options;
    const { guests = [], babies = [] } = this.options.plurals;

    const declTextGuests = this.declensionsOfInputText(this.totalItems, guests);
    const declTextBabies = this.declensionsOfInputText(
      this.menuItemValue.baby,
      babies,
    );

    const textInput = this.menuItemValue.baby === 0
      ? `${this.totalItems} ${declTextGuests}`
      : `${this.totalItems} ${declTextGuests}, ${this.menuItemValue.baby} ${declTextBabies}`;

    if (this.totalItems > 0 && this.totalItems <= maxItems) {
      (this.$input.value = textInput);
    } else {
      (this.$input.value = defaultText);
    }
  }

  inputTextComfort() {
    const { maxItems, defaultText, type } = this.options;

    if (type === 'comfort') {
      let textInput = '';

      if (this.totalItems > 0 && this.totalItems <= maxItems) {
        const pluralWords = Object.keys(this.options.plurals);

        for (const itemName of pluralWords) {
          const currentValue = this.menuItemValue[itemName];
          const currentPluralWords = this.options.plurals[itemName];

          if (currentValue === 0) {
            textInput += '';
          } else {
            textInput.length >= 8 ? (textInput += ', ') : (textInput += '');

            textInput += `${`${currentValue} ${this.declensionsOfInputText(
              currentValue,
              currentPluralWords,
            )}`}`;
          }
        }

        this.$input.value = this.cutLongText(textInput);
      } else {
        this.$input.value = defaultText;
      }
    }
  }

  cutLongText(str) {
    let changedStr = str;
    if (str.length > 19) {
      changedStr = `${str.slice(0, 20)}...`;
    }
    return changedStr;
  }

  declensionsOfInputText(num, wordArray) {
    const num100 = num % 100;
    const num10 = num % 10;

    if (num100 > 10 && num100 < 20) { return wordArray[2]; }
    if (num10 > 1 && num10 < 5) { return wordArray[1]; }
    if (num10 === 1) { return wordArray[0]; }
    return wordArray[2];
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === 'apply') {
      this.close();
    }
    if (type === 'clear') {
      this.clear();
    }
    if (type === 'input' || type === 'arrow') {
      this.toggle();
    }
  }

  get isOpen() {
    return this.$mainNode.classList.contains('open');
  }

  get isNotEmpty() {
    return this.totalItems > 0;
  }

  delClearBtn() {
    if (this.clearBtn) {
      if (this.isNotEmpty) {
        this.clearBtn.classList.add('display');
      } else {
        this.clearBtn.classList.remove('display');
      }
    }
  }

  disabledButtons() {
    const { minItems } = this.options;

    this.$menuItem.map((item) => {
      const itemCount = Number(item.countInput.value);

      if (itemCount <= minItems) {
        item.decrement.classList.add('disabled');
      } else {
        item.decrement.classList.remove('disabled');
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  clear() {
    const { defaultText } = this.options;

    this.$menuItem.map((item) => {
      item.countInput.value = 0;
    });
    this.clearBtn.classList.remove('display');
    this.$input.value = defaultText;
    this.totalItems = 0;
    this.menuItemValue.baby = 0;

    this.disabledButtons();
  }

  open() {
    this.$mainNode.classList.add('open');
  }

  close() {
    this.$mainNode.classList.remove('open');
  }

  destroy() {
    this.$mainNode.removeEventListener('click', this.clickHandler);
  }
}

const dropGuestsMainNode = document.querySelectorAll('.dropdown__guests');
const defaultOptionsGuests = {
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
dropGuestsMainNode.forEach(
  (selector) => new Dropdown(selector, defaultOptionsGuests),
);

const dropComfortMainNode = document.querySelectorAll('.dropdown__comfort');
const defaultOptionsComfort = {
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
dropComfortMainNode.forEach(
  (selector) => new Dropdown(selector, defaultOptionsComfort),
);
