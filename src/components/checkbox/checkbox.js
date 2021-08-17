class Checkbox {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.arrow = this.root.querySelector('[data-id="checkbox-dropdown-arrow"]');
    this.parentElement = this.root.parentElement;
    this.checkboxList = this.parentElement.querySelector('[data-id="checkbox-list"]');
    const isOpened = this.checkboxList.classList.contains('checkbox__list_opened');
    if (isOpened) this.arrowToggle();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.root.addEventListener('click', this.handleCheckboxClick.bind(this));
    this.root.addEventListener('keydown', this.handleCheckboxKeydown.bind(this));
  }

  handleCheckboxClick() {
    this.arrowToggle();
    this.dropdownToggle();
  }

  handleCheckboxKeydown({ code }) {
    if (code === 'Space') {
      this.arrowToggle();
      this.dropdownToggle();
    }
  }

  dropdownToggle() {
    this.checkboxList.classList.toggle('checkbox__list_opened');
  }

  arrowToggle() {
    this.arrow.classList.toggle('checkbox__dropdown-arrow-up');
    this.arrow.classList.toggle('checkbox__dropdown-arrow-down');
  }
}

export default Checkbox;
