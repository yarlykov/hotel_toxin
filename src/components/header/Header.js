class Header {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.root.addEventListener('click', this.handleHeaderBurgerClick.bind(this));
  }

  handleHeaderBurgerClick() {
    this.root.classList.toggle('header__menu-burger_active');
  }
}

export default Header;
