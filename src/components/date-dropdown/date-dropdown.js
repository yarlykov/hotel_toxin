/* eslint-disable max-classes-per-file */
class DateDropdown {
  constructor(selector, options) {
    if (selector.length !== 0) {
      this.$root = selector;
      this.options = options;
      this.init();
    }
  }

  init() {
    this.$calendar = this.$root.datepicker(this.options).data('datepicker');
    this.addButtons();

    this.$root.datepicker({
      onSelect: this.onSelect.bind(this),
      onChangeView: this.onChangeView.bind(this),
    });

    const { smallSize, initialDates } = this.options;
    if (initialDates) this.setInitialDates(initialDates);
    if (smallSize) this.calendarSmallSize();
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');
    btnWrap.classList.add(
      'datepicker__buttons',
      'js-datepicker__buttons',
    );

    clearBtn.classList.add(
      'button_inline',
      'datepicker__button-clear',
    );
    clearBtn.setAttribute('type', 'button');
    clearBtn.setAttribute('data-type', 'clear');
    clearBtn.innerHTML = 'Очистить';
    clearBtn.addEventListener('click', this.handleClearButtonClick.bind(this));

    applyBtn.classList.add(
      'button_inline',
      'datepicker__button-apply',
    );
    applyBtn.setAttribute('type', 'button');
    applyBtn.setAttribute('data-type', 'apply');
    applyBtn.innerHTML = 'Применить';
    applyBtn.addEventListener('click', this.handleApplyButtonClick.bind(this));

    if (this.options.inline) {
      applyBtn.setAttribute('disabled', 'disabled');
    }
    btnWrap.append(clearBtn);
    btnWrap.append(applyBtn);
    this.$calendar.$datepicker.append(btnWrap);
    this.buttons = this.$calendar.$datepicker.find('.js-datepicker__buttons');
    this.clearBtn = this.$calendar.$datepicker.find(
      '[data-type="clear"]',
    ).get(0);
  }

  onSelect(formattedDate) {
    if (formattedDate) {
      this.showClearButton();
    } else {
      this.hideClearButton();
    }
  }

  onChangeView(view) {
    if (view === 'months' || view === 'years') {
      this.buttons.hide();
    } else {
      this.buttons.show();
    }
  }

  handleClearButtonClick() {
    this.$calendar.clear();
  }

  handleApplyButtonClick() {
    this.$calendar.hide();
  }

  handleArrowDropdownClick() {
    this.$calendar.show();
  }

  showClearButton() {
    this.clearBtn.classList.add('datepicker__button-clear_show');
  }

  hideClearButton() {
    this.clearBtn.classList.remove('datepicker__button-clear_show');
  }

  setInitialDates(dates = []) {
    this.$calendar.selectDate(dates);
    this.showClearButton();
  }

  calendarSmallSize() {
    const calendarBody = this.$calendar.$datepicker.get(0);
    calendarBody.classList.add('datepicker--small');
  }
}

class DateDropdownDouble {
  constructor(selector, options) {
    this.$root = selector;
    this.options = options;
    this.init();
  }

  init() {
    this.$calendar = this.$root.datepicker(this.options).data('datepicker');
    this.addButtons();
    this.container = this.$root.get(0);

    this.$root.datepicker({
      onSelect: this.onSelect.bind(this),
      onChangeView: this.onChangeView.bind(this),
    });

    this.dateStart = this.container.querySelector('[data-type="date-dropdown-start"]');
    this.dateEnd = this.container.querySelector('[data-type="date-dropdown-end"]');
    this.container.addEventListener('click', this.handleDateDropdownClick.bind(this));
    this.calendarBody = this.$calendar.$datepicker.get(0).parentElement;

    const { initialDates } = this.options;
    if (initialDates) this.setInitialDates(initialDates);
  }

  handleDateDropdownClick({ target }) {
    const { type } = target.dataset;

    if (type === 'date-dropdown-start') this.toggle();
    if (type === 'date-dropdown-end') this.toggle();
    if (type === 'arrow') this.toggle();
    if (type === 'apply') this.close();
    if (type === 'clear') this.clear();
  }

  get isOpen() {
    return this.calendarBody.classList.contains('active');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.calendarBody.classList.add('active');
  }

  close() {
    this.calendarBody.classList.remove('active');
  }

  clear() {
    this.$calendar.clear();
    this.hideClearButton();
  }

  onSelect(formattedDate) {
    const { twoInputs } = this.options;
    if (formattedDate) {
      this.showClearButton();
    } else {
      this.hideClearButton();
    }
    if (twoInputs) {
      const dates = formattedDate.split(',');
      const [startDate = '', endDate = ''] = dates;

      this.dateStart.value = startDate;
      this.dateEnd.value = endDate;
    }
  }

  onChangeView(view) {
    if (view === 'months' || view === 'years') {
      this.buttons.hide();
    } else {
      this.buttons.show();
    }
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');
    btnWrap.classList.add(
      'datepicker__buttons',
      'js-datepicker__buttons',
    );

    clearBtn.classList.add(
      'button_inline',
      'datepicker__button-clear',
    );
    clearBtn.setAttribute('type', 'button');
    clearBtn.setAttribute('data-type', 'clear');
    clearBtn.innerHTML = 'Очистить';

    applyBtn.classList.add(
      'button_inline',
      'datepicker__button-apply',
    );
    applyBtn.setAttribute('type', 'button');
    applyBtn.setAttribute('data-type', 'apply');
    applyBtn.innerHTML = 'Применить';

    btnWrap.append(clearBtn);
    btnWrap.append(applyBtn);
    this.$calendar.$datepicker.append(btnWrap);
    this.buttons = this.$calendar.$datepicker.find('.js-datepicker__buttons');
    this.clearBtn = this.$calendar.$datepicker.find(
      '[data-type="clear"]',
    ).get(0);
  }

  setInitialDates(dates = []) {
    this.$calendar.selectDate(dates);
    this.showClearButton();
  }

  showClearButton() {
    this.clearBtn.classList.add('datepicker__button-clear_show');
  }

  hideClearButton() {
    this.clearBtn.classList.remove('datepicker__button-clear_show');
  }

  handleChangeInput(event) {
    const { value } = event.target;
    const correctDate = value.split('.').reverse().join('-');

    const dates = [];
    dates.push(new Date(correctDate));
    this.setInitialDates(dates);
  }
}

export { DateDropdown, DateDropdownDouble };
