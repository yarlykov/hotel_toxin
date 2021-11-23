import 'components/links';

import './navigation.scss';
import Navigation from './Navigation';

const navigationItemDropdown = document.querySelectorAll('.js-navigation__item_with-arrow-down');

if (navigationItemDropdown.length > 0) {
  navigationItemDropdown.forEach((selector) => new Navigation(selector));
}
