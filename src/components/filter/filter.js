class Filter {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.openLabel = this.root.querySelector('.js-filter__open-label');
    this.openLabel.addEventListener('click', this.handleFilterOpenLabelClick.bind(this));
  }

  handleFilterOpenLabelClick() {
    this.filterToggle();
  }

  filterToggle() {
    this.root.classList.toggle('search-room__filter_opened');
  }
}

export default Filter;
