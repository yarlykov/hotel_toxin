import Navigation from './navigation';

const navigationItemDropdown = document.querySelectorAll('[data-id="navigation-dropdown-item"]');

if (navigationItemDropdown.length > 0) {
  navigationItemDropdown.forEach((selector) => new Navigation(selector));
}
