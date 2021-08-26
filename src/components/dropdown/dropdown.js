import { addCommaInText, cutLongText, declensionsText } from './utils';
import { count, targetType } from './constants';

class Dropdown {
  constructor(selector, options) {
    this.mainNode = selector;
    this.options = options;

    this.init();
    this.bindEventListeners();
  }

  init() {
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

    this.findDOMElements();
    const { buttons } = this.options;
    if (buttons) this.addButtons();
    this.countInitialElements();
    this.setInputText();
    this.checkClearButton();
    this.counterButtonsToggle();
  }

  findDOMElements() {
    this.input = this.mainNode.querySelector('.js-dropdown__input');
    this.drop = this.mainNode.querySelector('.js-dropdown__drop');
    this.menuItems = this.mainNode.querySelectorAll('.js-dropdown__menu-item');
    this.menuItem = Array.from(this.menuItems).map((item) => ({
      increment: item.querySelector('.js-dropdown__increment'),
      decrement: item.querySelector('.js-dropdown__decrement'),
      countInput: item.querySelector('.js-dropdown__counter'),
      id: item.dataset.id,
      value: Number(item.querySelector('.js-dropdown__counter').value),
      isBabyValue:
        item.dataset.id === 'Младенцы'
          ? Number(item.querySelector('.js-dropdown__counter').value)
          : 0,
      isBedroomsValue:
        item.dataset.id === 'Спальни'
          ? Number(item.querySelector('.js-dropdown__counter').value)
          : 0,
      isBedsValue:
        item.dataset.id === 'Кровати'
          ? Number(item.querySelector('.js-dropdown__counter').value)
          : 0,
      isBathsValue:
        item.dataset.id === 'Ванные комнаты'
          ? Number(item.querySelector('.js-dropdown__counter').value)
          : 0,
    }));
  }

  bindEventListeners() {
    this.mainNode.addEventListener('click', this.handleDropdownClick.bind(this));
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');

    btnWrap.classList.add('dropdown__buttons');

    clearBtn.classList.add(
      'button_inline',
      'dropdown__button-clear',
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
    this.drop.appendChild(btnWrap);

    this.clearBtn = this.mainNode.querySelector(
      '[data-type="clear"]',
    );
  }

  countInitialElements() {
    const itemsQuantity = this.menuItem.reduce(
      (acc, item) => item.value + acc, 0,
    );
    const babiesQuantity = this.menuItem.reduce(
      (acc, item) => item.isBabyValue + acc,
      0,
    );
    const bedroomsQuantity = this.menuItem.reduce(
      (acc, item) => item.isBedroomsValue + acc,
      0,
    );
    const bedsQuantity = this.menuItem.reduce(
      (acc, item) => item.isBedsValue + acc,
      0,
    );
    const bathsQuantity = this.menuItem.reduce(
      (acc, item) => item.isBathsValue + acc,
      0,
    );

    this.totalItems = itemsQuantity;
    this.menuItemValue.baby = babiesQuantity;
    this.menuItemValue.bedrooms = bedroomsQuantity;
    this.menuItemValue.beds = bedsQuantity;
    this.menuItemValue.baths = bathsQuantity;
  }

  setInputText() {
    const { type } = this.options;
    if (type === 'comfort') this.input.value = this.createFinalComfortText();
    if (type === 'guests') this.input.value = this.createFinalGuestsText();
  }

  createFinalGuestsText() {
    const { defaultText } = this.options;
    const { guests = [], babies = [] } = this.options.plurals;

    const declTextGuests = declensionsText(this.totalItems, guests);
    const declTextBabies = declensionsText(
      this.menuItemValue.baby,
      babies,
    );

    const textInput = this.menuItemValue.baby === 0
      ? `${this.totalItems} ${declTextGuests}`
      : `${this.totalItems} ${declTextGuests}, ${this.menuItemValue.baby} ${declTextBabies}`;

    if (this.totalItems > 0) {
      return textInput;
    }
    return defaultText;
  }

  createFinalComfortText() {
    const { defaultText } = this.options;
    let textInput = '';

    if (this.totalItems > 0) {
      const pluralWords = Object.keys(this.options.plurals);
      pluralWords.forEach((itemName) => {
        const currentValue = this.menuItemValue[itemName];
        const currentPluralWords = this.options.plurals[itemName];

        if (currentValue === 0) {
          textInput += '';
        } else {
          textInput = addCommaInText(textInput);
          textInput += `${`${currentValue} ${declensionsText(
            currentValue,
            currentPluralWords,
          )}`}`;
        }
      });
      return cutLongText(textInput);
    }
    return defaultText;
  }

  increment(target) {
    const parent = target.parentNode;
    const counter = parent.querySelector('.js-dropdown__counter');
    const increment = parent.querySelector('.js-dropdown__increment');
    const decrement = parent.querySelector('.js-dropdown__decrement');
    const { id } = parent.parentNode.dataset;
    const currentValue = Number(counter.value);

    if (currentValue === this.maxItems) {
      increment.classList.add('disabled');
      increment.setAttribute('disabled', 'disabled');
    }
    if (currentValue < this.maxItems) {
      counter.value = currentValue + 1;
      this.totalItems += 1;
      this.itemCounter(id, count.INCREMENT);
      decrement.classList.remove('disabled');
      decrement.removeAttribute('disabled', 'disabled');
    }

    this.setInputText();
    this.checkClearButton();
  }

  decrement(target) {
    const parent = target.parentNode;
    const counter = parent.querySelector('.js-dropdown__counter');
    const increment = parent.querySelector('.js-dropdown__increment');
    const decrement = parent.querySelector('.js-dropdown__decrement');
    const { id } = parent.parentNode.dataset;
    const currentValue = Number(counter.value);
    const equalZero = (currentValue - 1) === 0;

    if (equalZero) {
      decrement.classList.add('disabled');
      decrement.setAttribute('disabled', 'disabled');
    }
    if (currentValue > 0) {
      counter.value = currentValue - 1;
      this.totalItems -= 1;
      this.itemCounter(id, count.DECREMENT);
      increment.classList.remove('disabled');
      increment.removeAttribute('disabled', 'disabled');
    }

    this.setInputText();
    this.counterButtonsToggle();
    this.checkClearButton();
  }

  itemCounter(id, operator) {
    const menuItemEngName = Object.keys(this.menuItemValue);
    const index = this.menuItemRusNames.indexOf(id);
    const translateId = menuItemEngName[index];

    if (operator === count.INCREMENT) {
      this.menuItemValue[translateId] += 1;
    } else {
      this.menuItemValue[translateId] -= 1;
    }
  }

  handleDropdownClick({ target }) {
    const { type } = target.dataset;

    if (type === count.INCREMENT) this.increment(target);
    if (type === count.DECREMENT) this.decrement(target);
    if (type === targetType.APPLY) this.close();
    if (type === targetType.CLEAR) this.clear();
    if (type === targetType.INPUT) this.toggle();
    if (type === targetType.ARROW) this.toggle();
  }

  handleOutsideClick(event) {
    if (!event.target.closest('.dropdown')) {
      this.close();
    }
  }

  get isOpen() {
    return this.mainNode.classList.contains('dropdown_open');
  }

  get isNotEmpty() {
    return this.totalItems > 0;
  }

  counterButtonsToggle() {
    const { minItems = 0 } = this.options;

    this.menuItem.forEach((item) => {
      const itemCount = Number(item.countInput.value);

      if (itemCount <= minItems) {
        item.decrement.classList.add('disabled');
        item.decrement.setAttribute('disabled', 'disabled');
      } else {
        item.decrement.classList.remove('disabled');
        item.decrement.removeAttribute('disabled', 'disabled');
      }
      if (itemCount >= this.maxItems) {
        item.increment.classList.add('disabled');
        item.increment.setAttribute('disabled', 'disabled');
      } else {
        item.increment.classList.remove('disabled');
        item.increment.removeAttribute('disabled', 'disabled');
      }
    });
  }

  checkClearButton() {
    if (this.clearBtn) {
      if (this.isNotEmpty) {
        this.clearBtn.classList.add('dropdown__button-clear_show');
      } else {
        this.clearBtn.classList.remove('dropdown__button-clear_show');
      }
    }
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

    this.menuItem.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.countInput.value = 0;
    });
    this.clearBtn.classList.remove('dropdown__button-clear_show');
    this.input.value = defaultText;
    this.totalItems = 0;
    this.menuItemValue.baby = 0;

    this.counterButtonsToggle();
  }

  open() {
    this.mainNode.classList.add('dropdown_open');
  }

  close() {
    this.mainNode.classList.remove('dropdown_open');
  }
}

export default Dropdown;
