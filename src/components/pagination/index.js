import Pagination from './Pagination';
import './pagination.scss';

const paginationNodes = document.querySelectorAll('.js-pagination');

if (paginationNodes) {
  paginationNodes.forEach((element) => new Pagination(element));
}
