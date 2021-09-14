import 'components/checkbox';
import 'components/heading';
import 'components/date-dropdown';
import 'components/dropdown';
import 'components/range-slider';
import 'components/text-field';

import './filter.scss';
import Filter from './filter';

const filterNode = document.querySelector('[data-id="search-room-filter"]');
if (filterNode !== null) new Filter(filterNode);
