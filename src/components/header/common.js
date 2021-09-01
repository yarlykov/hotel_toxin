import MenuBurger from './menu-burger';

const menuBurgerNode = document.querySelectorAll('.js-header__menu-burger');
if (menuBurgerNode.length > 0) {
  menuBurgerNode.forEach((selector) => new MenuBurger(selector));
}
