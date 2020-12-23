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

    this.init();
  }

  init() {
    this.itemDropdown = this.$mainNode.querySelector('.navigation__dropdown');
    this.clickHandler();
  }

  clickHandler() {
    this.$mainNode.addEventListener('click', () => {
      this.itemDropdown.classList.toggle('navigation__dropdown_visibility-hidden');
    });
  }
}

const navigationItemDropdown = document.querySelectorAll('.navigation__item_dropdown');

navigationItemDropdown.forEach(
  (selector) => new NavigationDropdown(selector),
);
