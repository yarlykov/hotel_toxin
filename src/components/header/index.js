import 'components/button';
import 'components/logo';
import 'components/links';
import 'components/navigation';

import './header.scss';
import MenuBurger from './Header';

const menuBurgerNode = document.querySelectorAll('.js-header__menu-burger');
menuBurgerNode.forEach((selector) => new MenuBurger(selector));
