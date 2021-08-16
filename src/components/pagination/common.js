import Pagination from './pagination';

const paginationElement = document.querySelector('.js-pagination');
const options = {
  dataSource: [1, 2, 3, 4, 5],
  pageSize: 0.35,
  pageRange: 1,
  showNavigator: true,
  formatNavigator: '<span><%= currentPage %></span> – 12 из 100+ вариантов аренды',
  showPrevious: false,
  showNext: true,
  nextText: '<span class="paginationjs-next-button"></span>',
  autoHideNext: true,
};

if (paginationElement !== null) new Pagination(paginationElement, options);
