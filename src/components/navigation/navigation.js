// const mainNavigationDropdownNode = $('.navigation__item_dropdown');

// mainNavigationDropdownNode.each(function () {
//   $(this).on('click', function () {
//     $(this).toggleClass('navigation__dropdown_open');
//     $(this).find('.navigation__dropdown').toggle();
//   });
// });

// $(document).on('mouseup', (e) => {
//   if (mainNavigationDropdownNode.has(e.target).length === 0) {
//     mainNavigationDropdownNode.find('.navigation__dropdown').hide();
//   }
// });

class NavigationDropdown {
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
    this.clickHandler();
    this.keydownHandler();
  }

  clickHandler() {
    this.$mainNode.addEventListener('click', () => {
      this.toggleDropdown();
    });
  }

  keydownHandler() {
    this.$mainNode.addEventListener('keydown', (event) => {
      this.onDropdownEnterPress(event);
      this.onDropdownEscapePress(event);
    });
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

  closeDropdown() {
    this.$itemDropdown.classList.add(this.$visibilityHiddenClass);
  }
}

const navigationItemDropdown = document.querySelectorAll('.navigation__item_dropdown');

navigationItemDropdown.forEach(
  (selector) => new NavigationDropdown(selector),
);
