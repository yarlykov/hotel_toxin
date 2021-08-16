class MenuBurger {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.root.addEventListener('click', () => {
      this.root.classList.toggle('header__menu-burger_active');
    });
  }
}

export default MenuBurger;
