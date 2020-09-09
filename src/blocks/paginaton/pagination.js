import 'paginationjs/dist/pagination.js'
import 'paginationjs/dist/pagination.css'

$('#pagination-container').pagination({
  dataSource: [1, 2, 3, 4, 5],
  pageSize: 0.35,
  pageRange: 1,
  showPrevious: false,
  showNext: true,
  autoHidePrevious: true,
  autoHideNext: true,
})