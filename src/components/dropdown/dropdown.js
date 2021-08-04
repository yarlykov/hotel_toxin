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

    this.input = this.mainNode.querySelector('.js-dropdown__input');
    this.drop = this.mainNode.querySelector('.js-dropdown__drop');
    this.menuItems = this.mainNode.querySelectorAll('.js-dropdown__menu-item');
    this.menuItem = Array.from(this.menuItems).map((item) => ({
      increment: item.querySelector('.js-controls__increment'),
      decrement: item.querySelector('.js-controls__decrement'),
      countInput: item.querySelector('.js-controls__counter'),
      id: item.dataset.id,
      value: Number(item.querySelector('.js-controls__counter').value),
      isBabyValue:
        item.dataset.id === 'Младенцы'
          ? Number(item.querySelector('.js-controls__counter').value)
          : 0,
      isBedroomsValue:
        item.dataset.id === 'Спальни'
          ? Number(item.querySelector('.js-controls__counter').value)
          : 0,
      isBedsValue:
        item.dataset.id === 'Кровати'
          ? Number(item.querySelector('.js-controls__counter').value)
          : 0,
      isBathsValue:
        item.dataset.id === 'Ванные комнаты'
          ? Number(item.querySelector('.js-controls__counter').value)
          : 0,
    }));

    if (buttons) {
      this.addButtons();
    }

    this.countInitialElements();
    this.writeTextInGuestInput();
    this.writeTextInComfortInput();
    this.deleteClearButton();

    this.counter();
    this.disabledButtons();
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

  writeTextInGuestInput() {
    const { maxItems, defaultText } = this.options;
    const { guests = [], babies = [] } = this.options.plurals;

    const declTextGuests = declensionsText(this.totalItems, guests);
    const declTextBabies = declensionsText(
      this.menuItemValue.baby,
      babies,
    );

    const textInput = this.menuItemValue.baby === 0
      ? `${this.totalItems} ${declTextGuests}`
      : `${this.totalItems} ${declTextGuests}, ${this.menuItemValue.baby} ${declTextBabies}`;

    if (this.totalItems > 0 && this.totalItems <= maxItems) {
      (this.input.value = textInput);
    } else {
      (this.input.value = defaultText);
    }
  }

  writeTextInComfortInput() {
    const { maxItems, defaultText, type } = this.options;

    if (type === 'comfort') {
      let textInput = '';

      if (this.totalItems > 0 && this.totalItems <= maxItems) {
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

        this.input.value = cutLongText(textInput);
      } else {
        this.input.value = defaultText;
      }
    }
  }

  deleteClearButton() {
    if (this.clearBtn) {
      if (this.isNotEmpty) {
        this.clearBtn.classList.add('dropdown__button-clear_show');
      } else {
        this.clearBtn.classList.remove('dropdown__button-clear_show');
      }
    }
  }

  counter() {
    const that = this;

    this.menuItem.forEach((item) => {
      const amount = item.countInput;

      item.increment.addEventListener('click', () => {
        const currentValue = Number(amount.value);

        if (that.totalItems < that.maxItems) {
          amount.value = currentValue + 1;
          that.totalItems += 1;

          that.itemCounter(item.id, count.INCREMENT);
        }

        that.writeTextInGuestInput();
        that.deleteClearButton();
        that.disabledButtons();
        that.writeTextInComfortInput();
      });

      item.decrement.addEventListener('click', () => {
        const currentValue = Number(amount.value);

        if (currentValue > 0) {
          amount.value = currentValue - 1;
          that.totalItems -= 1;

          that.itemCounter(item.id, count.DECREMENT);

          that.writeTextInGuestInput();
          that.deleteClearButton();
          that.disabledButtons();
          that.writeTextInComfortInput();
        }
      });
    });
  }

  disabledButtons() {
    const { minItems } = this.options;

    this.menuItem.forEach((item) => {
      const itemCount = Number(item.countInput.value);

      if (itemCount <= minItems) {
        item.decrement.classList.add('disabled');
      } else {
        item.decrement.classList.remove('disabled');
      }
    });
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

  handleDropdownClick(event) {
    const { type } = event.target.dataset;

    if (type === targetType.APPLY) {
      this.close();
    }
    if (type === targetType.CLEAR) {
      this.clear();
    }
    if (type === targetType.INPUT || type === targetType.ARROW) {
      this.toggle();
    }
  }

  handleOutsideClick(event) {
    if (!event.target.closest('.dropdown')) {
      this.close();
    }
  }

  get isOpen() {
    return this.mainNode.classList.contains('dropdown__open');
  }

  get isNotEmpty() {
    return this.totalItems > 0;
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

    this.disabledButtons();
  }

  open() {
    this.mainNode.classList.add('dropdown__open');
  }

  close() {
    this.mainNode.classList.remove('dropdown__open');
  }
}

export default Dropdown;
