import Pagination from './Pagination';
import './pagination.scss';

const paginationNodes = document.querySelectorAll('.js-pagination');
paginationNodes.forEach((element) => new Pagination(element));
