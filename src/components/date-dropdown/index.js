import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';
import './date-dropdown.scss';
import DateDropdown from './date-dropdown';

const $dataDropdown = $('.js-date-dropdown');
if ($dataDropdown.length > 0) {
  $dataDropdown.each(function init() {
    new DateDropdown($(this));
  });
}
