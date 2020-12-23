class Navigation {
  constructor(selector) {
    this.$mainNode = selector;

    this._init();
    this._setup();
  }

  _init() {
    this.$itemDropdown = this.$mainNode.querySelector('.navigation__dropdown');
    this.$visibilityHiddenClass = 'navigation__dropdown_visibility-hidden';
  }

  _setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
    this.hideAll = this.hideAll.bind(this);

    this.$mainNode.addEventListener('click', this.clickHandler);
    this.$mainNode.addEventListener('keydown', this.keydownHandler);
  }

  addDocumentHandlers() {
    document.addEventListener('click', this.hideAll);
  }

  clickHandler() {
    this.toggleDropdown();
    this.addDocumentHandlers();
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
    }
  }

  onDropdownEscapePress(event) {
    if (event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  toggleDropdown() {
    this.$itemDropdown.classList.toggle(this.$visibilityHiddenClass);
  }

  openDropdown() {
    this.$itemDropdown.classList.remove(this.$visibilityHiddenClass);
  }

  closeDropdown() {
    this.$itemDropdown.classList.add(this.$visibilityHiddenClass);
  }

  removeDocumentHandlers() {
    document.removeEventListener('click', this.hideAll);
  }
}

const navigationItemDropdown = document.querySelectorAll('.navigation__item_dropdown');

navigationItemDropdown.forEach((selector) => new Navigation(selector));
