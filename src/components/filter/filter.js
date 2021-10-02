class Filter {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    const filter = document.querySelector('[data-id="search-room-filter"]');
    if (filter) {
      const header = document.querySelector('.header__body');
      const filterIcon = document.createElement('div');
      filterIcon.classList.add('header__filter-label');
      filterIcon.addEventListener('click', this.handleFilterLabelClick.bind(this));
      header.append(filterIcon);
    }
  }

  handleFilterLabelClick() {
    this.filterToggle();
  }

  filterToggle() {
    this.root.classList.toggle('search-room__filter_opened');
  }
}

export default Filter;
