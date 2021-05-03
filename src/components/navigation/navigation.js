class Navigation {
  constructor(selector) {
    this.$mainNode = selector;

    this._init();
    this._setup();
  }

  toggleDropdown() {
    this.$itemDropdown.classList.toggle(this.$visibilityHiddenClass);
    this.arrowToggle();
  }

  closeDropdown() {
    this.$itemDropdown.classList.add(this.$visibilityHiddenClass);
    this.arrowDown();
  }

  arrowToggle() {
    this.$mainNode.classList.toggle(this.$DownArrowDropdownClass);
    this.$mainNode.classList.toggle(this.$UpArrowDropdownClass);
  }

  arrowDown() {
    this.$mainNode.classList.remove(this.$UpArrowDropdownClass);
    this.$mainNode.classList.add(this.$DownArrowDropdownClass);
  }

  _init() {
    this.$itemDropdown = this.$mainNode.querySelector('.navigation__dropdown');
    this.$visibilityHiddenClass = 'navigation__dropdown_visibility-hidden';
    this.$UpArrowDropdownClass = 'navigation__item_dropdown_arrow-up';
    this.$DownArrowDropdownClass = 'navigation__item_dropdown_arrow-down';
  }

  _setup() {
    this._clickHandler = this._clickHandler.bind(this);
    this._keydownHandler = this._keydownHandler.bind(this);
    this._hideAll = this._hideAll.bind(this);

    this.$mainNode.addEventListener('click', this._clickHandler);
    this.$mainNode.addEventListener('keydown', this._keydownHandler);
  }

  _clickHandler(event) {
    this.toggleDropdown();
    this._addDocumentHandlers();
    event.stopPropagation();
  }

  _addDocumentHandlers() {
    document.addEventListener('click', this._hideAll);
  }

  _keydownHandler(event) {
    this._onDropdownEnterPress(event);
    this._onDropdownEscapePress(event);
  }

  _hideAll(event) {
    if (event.target.dataset.type !== 'link-dropdown') {
      this.closeDropdown();
      this._removeDocumentHandlers();
    }
  }

  _onDropdownEnterPress(event) {
    if (event.code === 'Enter') {
      this.toggleDropdown();
      this._addDocumentHandlers();
    }
  }

  _onDropdownEscapePress(event) {
    if (event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  _removeDocumentHandlers() {
    document.removeEventListener('click', this._hideAll);
  }
}

const navigationItemDropdown = document.querySelectorAll('.navigation__item_dropdown');

navigationItemDropdown.forEach((selector) => new Navigation(selector));
