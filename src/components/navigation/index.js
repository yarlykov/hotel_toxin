import 'components/links';

import './navigation.scss';
import Navigation from './Navigation';

const navigationItemDropdown = document.querySelectorAll('.js-navigation__item_with-arrow-down');

if (navigationItemDropdown) {
  navigationItemDropdown.forEach((selector) => new Navigation(selector));
}
