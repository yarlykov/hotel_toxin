import 'src/main';
import 'components/header';
import 'components/filter';
import 'components/footer';
import 'components/pagination';
import 'components/room-review-widget';
import 'components/room-selection';

import SearchRoom from './SearchRoom';
import './search-room-page.scss';

const searchRoomNode = document.querySelector('.js-search-room');
new SearchRoom(searchRoomNode);
