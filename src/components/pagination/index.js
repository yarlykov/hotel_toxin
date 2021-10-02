import 'paginationjs/dist/pagination';
import 'paginationjs/dist/pagination.css';

import './pagination.scss';
import Pagination from './pagination';

const paginationElement = document.querySelector('.js-pagination');
const options = {
  dataSource: [1, 2, 3, 4, 5],
};

if (paginationElement !== null) new Pagination(paginationElement, options);
