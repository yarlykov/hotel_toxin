const checkboxDropdown = $('.js-checkbox .checkbox__header');

checkboxDropdown.on('click', function arrowCheckbox() {
  const arrowDropdown = $(this).find('.js-checkbox__header_arrow');
  const itemDropdown = $(this).parent().find('.checkbox__item');

  if (itemDropdown.length) {
    itemDropdown.toggle();
    arrowDropdown.toggleClass('checkbox__header_arrow-up');
    arrowDropdown.toggleClass('checkbox__header_arrow-down');
  }
});
