class Pagination {
  constructor(selector, options) {
    this.$root = $(selector);
    this.options = options;
    this.init();
  }

  init() {
    const defaultParams = {
      pageSize: 0.35,
      showNavigator: true,
      pageRange: 1,
      formatNavigator: '<span><%= currentPage %></span> – 12 из 100+ вариантов аренды',
      showPrevious: false,
      showNext: true,
      nextText: '<span class="paginationjs-next-button"></span>',
      autoHideNext: true,
    };
    const options = { ...this.options, ...defaultParams };

    this.$root.pagination(options);
  }
}

export default Pagination;
