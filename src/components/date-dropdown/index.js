import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';

import DateDropdown from './DateDropdown';
import './date-dropdown.scss';

const $dataDropdown = $('.js-date-dropdown');
if ($dataDropdown.length > 0) {
  $dataDropdown.each(function init() {
    new DateDropdown($(this));
  });
}
