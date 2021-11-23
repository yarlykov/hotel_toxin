class CheckboxList {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.arrow = this.root.querySelector('.js-checkbox-list__dropdown-arrow-down');
    this.parentElement = this.root.parentElement;
    this.checkboxList = this.parentElement.querySelector('.js-checkbox-list__list');
    const isOpened = this.checkboxList.classList.contains('checkbox-list__list_opened');
    if (isOpened) this.arrowToggle();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.root.addEventListener('click', this.handleCheckboxListClick.bind(this));
    this.root.addEventListener('keydown', this.handleCheckboxListKeydown.bind(this));
  }

  handleCheckboxListClick() {
    this.arrowToggle();
    this.dropdownToggle();
  }

  handleCheckboxListKeydown(event) {
    const { code } = event;
    if (code === 'Space') {
      event.preventDefault();
      this.arrowToggle();
      this.dropdownToggle();
    }
  }

  dropdownToggle() {
    this.checkboxList.classList.toggle('checkbox-list__list_opened');
  }

  arrowToggle() {
    this.arrow.classList.toggle('checkbox-list__dropdown-arrow-up');
    this.arrow.classList.toggle('checkbox-list__dropdown-arrow-down');
  }
}

export default CheckboxList;
