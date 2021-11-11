import './dropdown.scss';
import Dropdown from './dropdown';

const dropdownNodes = document.querySelectorAll('.js-dropdown');

if (dropdownNodes.length > 0) {
  dropdownNodes.forEach((element) => new Dropdown(element));
}
