import './checkbox-list.scss';
import 'components/checkbox';
import CheckboxList from './CheckboxList';

const checkboxDropdownList = document.querySelectorAll('.js-checkbox-list__dropdown');
checkboxDropdownList.forEach((selector) => new CheckboxList(selector));
