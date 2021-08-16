import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

class Pagination {
  constructor(selector, options) {
    this.$root = $(selector);
    this.options = options;
    this.init();
  }

  init() {
    this.$root.pagination(this.options);
  }
}

export default Pagination;
