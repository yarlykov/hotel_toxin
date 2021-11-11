import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

import './pagination.scss';

const paginationNodes = document.querySelectorAll('.js-pagination');

const defaultOptions = {
  nextText: '<span class="paginationjs-next-button"></span>',
  showPrevious: false,
  showNext: true,
  autoHideNext: true,
  pageRange: 1,
  pageSize: 0.35,
};

if (paginationNodes.length > 0) {
  paginationNodes.forEach((element) => {
    const { options } = element.dataset;
    const inlineOptions = JSON.parse(options);
    const paginationOptions = { ...defaultOptions, ...inlineOptions };
    $(element).pagination(paginationOptions);
  });
}
