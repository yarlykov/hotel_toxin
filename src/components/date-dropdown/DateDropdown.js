import targetType from './constants';

const defaultOptions = {
  offset: 5,
  range: true,
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
};

class DateDropdown {
  constructor(selector) {
    if (selector.length !== 0) {
      this.$root = selector;
      const { options } = this.$root.get(0).dataset;

      try {
        this.inlineOptions = JSON.parse(options);
        const { initialDates } = this.inlineOptions;

        if (initialDates) {
          this.initialDates = initialDates.map((item) => new Date(item));
        }

        this.options = {
          ...defaultOptions,
          ...this.inlineOptions,
          initialDates: this.initialDates,
        };
        this.init();
      } catch (e) {
        throw new Error('Incorrect options passed to the DateDropdown class', e);
      }
    }
  }

  init() {
    this.$calendar = this.$root.datepicker(this.options).data('datepicker');
    this.container = this.$root.get(0);
    this.calendarBody = this.$calendar.$datepicker.get(0).parentElement;
    this.container.addEventListener('click', this.handleDateDropdownClick.bind(this));
    this.container.addEventListener('keydown', this.handleDateDropdownKeydown.bind(this));
    this.filterDateDropdown = this.container.querySelector('[data-type="filter-date-dropdown"]');

    const { hasTwoInputs, smallSize, initialDates } = this.options;
    if (hasTwoInputs) {
      this.dateStart = this.container.querySelector('[data-type="date-dropdown-start"]');
      this.dateEnd = this.container.querySelector('[data-type="date-dropdown-end"]');
      this.dateStart.addEventListener('change', this.handleChangeInput.bind(this));
      this.dateEnd.addEventListener('change', this.handleChangeInput.bind(this));
    }
    this.addButtons();

    this.$root.datepicker({
      onSelect: this.onSelect.bind(this),
      onChangeView: this.onChangeView.bind(this),
    });

    if (initialDates) this.setInitialDates(initialDates);
    if (smallSize) this.calendarSmallSize();
  }

  handleDateDropdownClick({ target }) {
    const { type } = target.dataset;

    if (type === targetType.FILTER) this.toggle();
    if (type === targetType.START_DROPDOWN) this.open();
    if (type === targetType.END_DROPDOWN) this.open();
    if (type === targetType.ARROW) this.toggle();
    if (type === targetType.APPLY) this.close();
    if (type === targetType.CLEAR) this.clear();
  }

  handleDateDropdownKeydown(event) {
    const { code } = event;

    if (code === 'Space') {
      event.preventDefault();
      this.toggle();
    }
    if (code === 'Enter') {
      event.preventDefault();
    }
  }

  handleDocumentClick(event) {
    if (!this.isClickOnDateDropdown(event)) this.close();
  }

  get isOpen() {
    return this.calendarBody.classList.contains('active');
  }

  isClickOnDateDropdown({ path }) {
    return path.includes(this.container);
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
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  close() {
    this.calendarBody.classList.remove('active');
    document.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  clear() {
    this.$calendar.clear();
    this.hideClearButton();
  }

  addButtons() {
    const btnWrap = document.createElement('div');
    const clearBtn = document.createElement('button');
    const applyBtn = document.createElement('button');
    const clearText = document.createElement('span');
    const applyText = document.createElement('span');

    btnWrap.classList.add(
      'datepicker__buttons',
      'js-datepicker__buttons',
    );

    clearBtn.classList.add(
      'button',
      'button_inline',
      'datepicker__button-clear',
    );
    clearBtn.setAttribute('type', 'button');
    clearText.setAttribute('data-type', 'clear');
    clearText.innerHTML = 'Очистить';
    clearText.classList.add('button__inner', 'button__inner_text-color_purple');
    clearBtn.append(clearText);

    applyBtn.classList.add(
      'button',
      'button_inline',
      'datepicker__button-apply',
    );
    applyBtn.setAttribute('type', 'button');
    applyText.setAttribute('data-type', 'apply');
    applyText.innerHTML = 'Применить';
    applyText.classList.add('button__inner', 'button__inner_text-color_purple');
    applyBtn.append(applyText);

    btnWrap.append(clearBtn);
    btnWrap.append(applyBtn);
    this.$calendar.$datepicker.append(btnWrap);
    this.buttons = this.$calendar.$datepicker.find('.js-datepicker__buttons');
    this.clearBtn = this.$calendar.$datepicker.find(
      '[data-type="clear"]',
    ).get(0);
  }

  onSelect(formattedDate) {
    const { hasTwoInputs } = this.options;
    if (formattedDate) {
      this.showClearButton();
    } else {
      this.hideClearButton();
    }
    if (hasTwoInputs) {
      const dates = formattedDate.split(',');
      const [startDate = '', endDate = ''] = dates;

      this.dateStart.value = startDate;
      this.dateEnd.value = endDate;
    }
    if (this.filterDateDropdown) {
      this.filterDateDropdown.value = formattedDate;
    }
  }

  onChangeView(view) {
    if (view === 'months' || view === 'years') {
      this.buttons.hide();
    } else {
      this.buttons.show();
    }
  }

  showClearButton() {
    this.clearBtn.classList.add('datepicker__button-clear_displayed');
  }

  hideClearButton() {
    this.clearBtn.classList.remove('datepicker__button-clear_displayed');
  }

  setInitialDates(dates = []) {
    this.$calendar.selectDate(dates);
    this.showClearButton();
  }

  calendarSmallSize() {
    const calendarBody = this.$calendar.$datepicker.get(0);
    calendarBody.classList.add('datepicker--small');
  }

  handleChangeInput(event) {
    const { value } = event.target;
    const correctDate = value.split('.').reverse().join('-');

    const dates = [];
    dates.push(new Date(correctDate));
    this.setInitialDates(dates);
  }
}

export default DateDropdown;
