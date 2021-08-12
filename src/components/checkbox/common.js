import Checkbox from './Checkbox';

const checkboxDropdownList = document.querySelectorAll('[data-id="checkbox-dropdown"]');

if (checkboxDropdownList.length > 0) {
  const dropdownNodes = [...checkboxDropdownList];
  dropdownNodes.forEach((selector) => new Checkbox(selector));
}
