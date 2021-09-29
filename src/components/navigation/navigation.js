class Navigation {
  constructor(selector) {
    this.mainNode = selector;

    this.init();
    this.setup();
  }

  init() {
    this.itemDropdown = this.mainNode.querySelector('.navigation__dropdown');
    this.visibilityHiddenClass = 'navigation__dropdown_visibility-hidden';
    this.upArrowDropdownClass = 'navigation__item_with-arrow-up';
    this.downArrowDropdownClass = 'navigation__item_with-arrow-down';
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
    this.hideAll = this.hideAll.bind(this);

    this.mainNode.addEventListener('click', this.clickHandler);
    this.mainNode.addEventListener('keydown', this.keydownHandler);
  }

  toggleDropdown() {
    this.itemDropdown.classList.toggle(this.visibilityHiddenClass);
    this.arrowToggle();
  }

  closeDropdown() {
    this.itemDropdown.classList.add(this.visibilityHiddenClass);
    this.arrowDown();
  }

  arrowToggle() {
    this.mainNode.classList.toggle(this.downArrowDropdownClass);
    this.mainNode.classList.toggle(this.upArrowDropdownClass);
  }

  arrowDown() {
    this.mainNode.classList.remove(this.upArrowDropdownClass);
    this.mainNode.classList.add(this.downArrowDropdownClass);
  }

  clickHandler(event) {
    this.toggleDropdown();
    this.addDocumentHandlers();
    event.stopPropagation();
  }

  addDocumentHandlers() {
    document.addEventListener('click', this.hideAll);
  }

  keydownHandler(event) {
    this.onDropdownEnterPress(event);
    this.onDropdownEscapePress(event);
  }

  hideAll(event) {
    if (event.target.dataset.type !== 'link-dropdown') {
      this.closeDropdown();
      this.removeDocumentHandlers();
    }
  }

  onDropdownEnterPress(event) {
    if (event.code === 'Enter') {
      this.toggleDropdown();
      this.addDocumentHandlers();
    }
  }

  onDropdownEscapePress(event) {
    if (event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  removeDocumentHandlers() {
    document.removeEventListener('click', this.hideAll);
  }
}

export default Navigation;
