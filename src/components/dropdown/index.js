import Dropdown from './Dropdown';
import './dropdown.scss';

const dropdownNodes = document.querySelectorAll('.js-dropdown');

if (dropdownNodes) {
  dropdownNodes.forEach((element) => new Dropdown(element));
}
