import Dropdown from './Dropdown';
import './dropdown.scss';

const dropdownNodes = document.querySelectorAll('.js-dropdown');

if (dropdownNodes.length > 0) {
  dropdownNodes.forEach((element) => new Dropdown(element));
}
