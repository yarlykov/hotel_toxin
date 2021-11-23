import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

class Pagination {
  constructor(selector) {
    this.$root = $(selector);
    const { options } = selector.dataset;
    this.options = JSON.parse(options);

    this.init();
  }

  init() {
    const defaultParams = {
      nextText: '<span class="paginationjs-next-button"></span>',
      showPrevious: false,
      showNext: true,
      autoHideNext: true,
      pageRange: 1,
      pageSize: 0.35,
    };
    const options = { ...this.options, ...defaultParams };

    this.$root.pagination(options);
  }
}

export default Pagination;
