import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

const paginationMainNode = $('.js-pagination');
paginationMainNode.each(function () {
  $(this).pagination({
    dataSource: [1, 2, 3, 4, 5],
    pageSize: 0.35,
    pageRange: 1,
    showNavigator: true,
    formatNavigator: '<span><%= currentPage %></span> – 12 из 100+ вариантов аренды',
    showPrevious: false,
    showNext: true,
    nextText: '<span class="js-pagination__next-button"></span>',
    autoHideNext: true,
  });
});
