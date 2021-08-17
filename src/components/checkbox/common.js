import Checkbox from './checkbox';

const checkboxDropdownList = document.querySelectorAll('[data-id="checkbox-dropdown"]');

if (checkboxDropdownList.length > 0) {
  checkboxDropdownList.forEach((selector) => new Checkbox(selector));
}
