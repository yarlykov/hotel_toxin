import { addCommaInText, cutLongText, declensionsText } from './utils';
import { count, targetType } from './constants';
import rootReducer from './redux/rootReducer';
import createStore from './createStore';

class Dropdown {
  constructor(selector, options) {
    this.mainNode = selector;
    this.options = options;
    this.store = createStore(rootReducer, {});

    this.init();
    this.bindEventListeners();
  }

  init() {
    this.maxItems = this.options.maxItems || Number.MAX_SAFE_INTEGER;
    this.store.subscribe((state) => {
      this.state = { ...state };
    });

    this.findDOMElements();
    this.addInitValuesToStore();
    this.countTotalItems();

    const { buttons } = this.options;
    if (buttons) this.addButtons();
    this.setInputText();
    this.checkClearButton();
    this.counterButtonsToggle();
  }

  addInitValuesToStore() {
    this.menuItemsData.forEach((item) => {
      this.store.dispatchEvent({ type: count.INIT, id: item.id, value: item.value });
    });
  }

  findDOMElements() {
    this.input = this.mainNode.querySelector('.js-dropdown__input');
    this.drop = this.mainNode.querySelector('.js-dropdown__drop');
    this.arrow = this.mainNode.querySelector('[data-type="arrow"]');
    const menuItemNodes = this.mainNode.querySelectorAll('.js-dropdown__menu-item');

    this.menuItemsData = Array.from(menuItemNodes).map((item) => ({
      increment: item.querySelector('.js-dropdown__increment'),
      decrement: item.querySelector('.js-dropdown__decrement'),
      countInput: item.querySelector('.js-dropdown__counter'),
      id: item.dataset.id,
      value: Number(item.querySelector('.js-dropdown__counter').value) || 0,
      [item.dataset.id]: Number(item.querySelector('.js-dropdown__counter').value),
    }));
  }

  countTotalItems() {
    const totalItems = this.menuItemsData.reduce(
      (acc, item) => item.value + acc, 0,
    );
    this.store.dispatchEvent({ type: count.INIT, id: count.TOTAL, value: totalItems });
  }

  bindEventListeners() {
    this.mainNode.addEventListener('click', this.handleDropdownClick.bind(this));
    this.mainNode.addEventListener('keydown', this.handleDropdownKeydown.bind(this));
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');
    const clearText = document.createElement('span');
    const applyText = document.createElement('span');

    btnWrap.classList.add('dropdown__buttons');

    clearBtn.classList.add(
      'button',
      'button_inline',
      'dropdown__button-clear',
    );
    clearBtn.setAttribute('type', 'button');
    clearText.setAttribute('data-type', 'clear');
    clearText.innerHTML = 'Очистить';
    clearText.classList.add('button__inner', 'button__inner_text-color_purple');
    clearBtn.append(clearText);

    applyBtn.classList.add('button', 'button_inline');
    applyBtn.setAttribute('type', 'button');
    applyText.setAttribute('data-type', 'apply');
    applyText.innerHTML = 'Применить';
    applyText.classList.add('button__inner', 'button__inner_text-color_purple');
    applyBtn.append(applyText);

    btnWrap.appendChild(clearBtn);
    btnWrap.appendChild(applyBtn);
    this.drop.appendChild(btnWrap);

    this.clearBtn = this.mainNode.querySelector(
      '[data-type="clear"]',
    );
  }

  setInputText() {
    this.input.value = this.createFinalText();
  }

  createFinalText() {
    const { defaultText, total } = this.options;
    const { totalItems } = this.state;
    let textInput = '';

    if (totalItems > 0) {
      const { plurals, numberOfLetters = 19 } = this.options;
      if (total) {
        this.totalPluralWords = plurals.totalItems;
        textInput = addCommaInText(textInput);
        textInput += `${`${totalItems} ${declensionsText(
          totalItems,
          this.totalPluralWords,
        )}`}`;
      }

      this.menuItemsData.forEach((item) => {
        const { id } = item;
        const currentValue = this.state[id];

        if (Object.prototype.hasOwnProperty.call(plurals, id)) {
          this.currentPluralWords = plurals[id];
        } else {
          this.currentPluralWords = '';
        }
        if (currentValue === 0) {
          textInput += '';
        }

        const hasCurrentValueAndPlurals = currentValue && Array.isArray(this.currentPluralWords);

        if (hasCurrentValueAndPlurals) {
          textInput = addCommaInText(textInput);
          textInput += `${`${currentValue} ${declensionsText(
            currentValue,
            this.currentPluralWords,
          )}`}`;
        } else if (currentValue && !total) {
          textInput = addCommaInText(textInput);
          textInput += ` ${currentValue} add plurals `;
        }
      });
      return cutLongText(textInput, numberOfLetters);
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
    const maxValue = this.maxItems - 1;

    if (currentValue === maxValue) {
      increment.classList.add('disabled');
      increment.setAttribute('disabled', 'disabled');
    }
    if (currentValue < this.maxItems) {
      const { totalItems } = this.state;
      this.store.dispatchEvent({ type: count.INCREMENT, id, value: currentValue });
      this.store.dispatchEvent({ type: count.INCREMENT, id: count.TOTAL, value: totalItems });

      counter.value = currentValue + 1;
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
      const { totalItems } = this.state;
      this.store.dispatchEvent({ type: count.DECREMENT, id, value: currentValue });
      this.store.dispatchEvent({ type: count.DECREMENT, id: count.TOTAL, value: totalItems });

      counter.value = currentValue - 1;
      increment.classList.remove('disabled');
      increment.removeAttribute('disabled', 'disabled');
    }

    this.setInputText();
    this.counterButtonsToggle();
    this.checkClearButton();
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

  handleDropdownKeydown(event) {
    const { code } = event;

    if (code === 'Space') {
      event.preventDefault();
      this.toggle();
    }
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
    const { totalItems } = this.state;
    return totalItems > 0;
  }

  counterButtonsToggle() {
    const { minItems = 0 } = this.options;

    this.menuItemsData.forEach((item) => {
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
      this.arrowDown();
    } else {
      this.open();
      this.arrowUp();
    }
  }

  arrowUp() {
    this.arrow.classList.remove('dropdown__arrow_down');
    this.arrow.classList.add('dropdown__arrow_up');
  }

  arrowDown() {
    this.arrow.classList.remove('dropdown__arrow_up');
    this.arrow.classList.add('dropdown__arrow_down');
  }

  clear() {
    const { defaultText } = this.options;

    this.menuItemsData.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.countInput.value = 0;
      this.store.dispatchEvent({ type: count.INIT, id: item.id, value: 0 });
    });
    this.store.dispatchEvent({ type: count.INIT, id: count.TOTAL, value: 0 });

    this.clearBtn.classList.remove('dropdown__button-clear_show');
    this.input.value = defaultText;
    this.counterButtonsToggle();
  }

  open() {
    this.mainNode.classList.add('dropdown_open');
  }

  close() {
    this.mainNode.classList.remove('dropdown_open');
    this.arrowDown();
  }
}

export default Dropdown;
