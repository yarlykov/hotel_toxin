import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

import getRoundedNumber from './helpers/getRoundedNumber';

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
      formatNavigator: this.setNavigationFormat,
    };
    const options = {
      ...this.options,
      ...defaultParams,
      dataSource: Pagination.fillArrayWIthData(this.options.amountOfElements),
    };
    this.pageSize = this.options.pageSize;
    this.amountOfElements = this.options.amountOfElements;

    this.$root.pagination(options);
  }

  static fillArrayWIthData(amountOfElements) {
    return Array.from(Array(amountOfElements).keys());
  }

  setNavigationFormat(currentPage) {
    const form = this.pageSize * currentPage - this.pageSize + 1;
    const to = this.pageSize * currentPage;
    const roundedAmount = getRoundedNumber(this.amountOfElements);
    const amount = this.amountOfElements > 10 ? `${roundedAmount}+` : `${roundedAmount}`;
    return `${form} – ${to} из ${amount} вариантов аренды`;
  }
}

export default Pagination;
