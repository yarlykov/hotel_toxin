import targetType from './constants';

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
    this.container = this.$root.get(0);
    this.calendarBody = this.$calendar.$datepicker.get(0).parentElement;
    this.container.addEventListener('click', this.handleDateDropdownClick.bind(this));
    this.container.addEventListener('keydown', this.handleDateDropdownKeydown.bind(this));
    this.filterDateDropdown = this.container.querySelector('[data-type="filter-date-dropdown"]');

    const { twoInputs, smallSize, initialDates } = this.options;
    if (twoInputs) {
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
    if (type === targetType.START_DROPDOWN) this.toggle();
    if (type === targetType.END_DROPDOWN) this.toggle();
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

  handleOutsideClick(event) {
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
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  close() {
    this.calendarBody.classList.remove('active');
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  clear() {
    this.$calendar.clear();
    this.hideClearButton();
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

  handleChangeInput(event) {
    const { value } = event.target;
    const correctDate = value.split('.').reverse().join('-');

    const dates = [];
    dates.push(new Date(correctDate));
    this.setInitialDates(dates);
  }
}

export default DateDropdown;
