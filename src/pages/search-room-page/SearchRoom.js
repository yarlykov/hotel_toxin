class SearchRoom {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.filter = this.root.querySelector('.js-search-room__filter');

    const filterButton = this.root.querySelector('.js-search-room__filter-button');
    filterButton.addEventListener('click', this.handleFilterButtonClick.bind(this));
  }

  handleFilterButtonClick() {
    this.filter.classList.toggle('search-room__filter_opened');
  }
}

export default SearchRoom;
