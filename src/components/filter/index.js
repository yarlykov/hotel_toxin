import 'components/checkbox-list';
import 'components/heading';
import 'components/date-dropdown';
import 'components/dropdown';
import 'components/range-slider';
import 'components/text-field';

import './filter.scss';
import Filter from './Filter';

const filterNode = document.querySelector('.js-search-room__filter');
new Filter(filterNode);
