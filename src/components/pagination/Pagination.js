import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

class Pagination {
  constructor(selector) {
    this.$root = $(selector);
    const { options } = selector.dataset;

    try {
      this.options = JSON.parse(options);
      this.init();
    } catch (e) {
      throw new Error('Incorrect options passed to the Pagination class', e);
    }
  }

  init() {
    const defaultParams = {
      nextText: '<span class="paginationjs-next-button"></span>',
      showPrevious: false,
      showNext: true,
      autoHideNext: true,
      pageRange: 1,
      formatNavigator: this.formatNavigator,
    };
    const options = {
      ...this.options,
      ...defaultParams,
      dataSource: Pagination.dataSourceFill(this.options.amountOfElements),
    };
    this.pageSize = this.options.pageSize;
    this.amountOfElements = this.options.amountOfElements;

    this.$root.pagination(options);
  }

  static dataSourceFill(amountOfElements) {
    return Array.from(Array(amountOfElements).keys());
  }

  formatNavigator(currentPage) {
    const form = this.pageSize * currentPage - this.pageSize + 1;
    const to = this.pageSize * currentPage;
    return `${form} – ${to} из 100+ вариантов аренды`;
  }
}

export default Pagination;
