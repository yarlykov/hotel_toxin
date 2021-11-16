import './checkbox-list.scss';
import 'components/checkbox';
import CheckboxList from './CheckboxList';

const checkboxDropdownList = document.querySelectorAll('.js-checkbox-list__dropdown');

if (checkboxDropdownList.length > 0) {
  checkboxDropdownList.forEach((selector) => new CheckboxList(selector));
}
