import Pagination from './Pagination';
import './pagination.scss';

const paginationNodes = document.querySelectorAll('.js-pagination');

if (paginationNodes.length > 0) {
  paginationNodes.forEach((element) => new Pagination(element));
}
