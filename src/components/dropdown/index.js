import Dropdown from './Dropdown';
import './dropdown.scss';

const dropdownNodes = document.querySelectorAll('.js-dropdown');
dropdownNodes.forEach((element) => new Dropdown(element));
