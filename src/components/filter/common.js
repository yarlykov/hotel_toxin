import Filter from './filter';

const filterNode = document.querySelector('[data-id="search-room-filter"]');
if (filterNode !== null) new Filter(filterNode);
