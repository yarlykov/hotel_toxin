import './checkbox-list.scss';
import 'components/checkbox';
import CheckboxList from './checkbox-list';

const checkboxDropdownList = document.querySelectorAll('[data-id="checkbox-list-dropdown"]');

if (checkboxDropdownList.length > 0) {
  checkboxDropdownList.forEach((selector) => new CheckboxList(selector));
}
