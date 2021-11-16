import 'components/button';
import 'components/logo';
import 'components/links';
import 'components/navigation';

import './header.scss';
import MenuBurger from './MenuBurger';

const menuBurgerNode = document.querySelectorAll('.js-header__menu-burger');
if (menuBurgerNode.length > 0) {
  menuBurgerNode.forEach((selector) => new MenuBurger(selector));
}
