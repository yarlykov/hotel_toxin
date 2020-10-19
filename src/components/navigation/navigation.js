const mainNavigationDropdownNode = $('.navigation__item_dropdown');

mainNavigationDropdownNode.each(function(){
  $(this).on('click', function(){
    $(this).toggleClass('navigation__dropdown_open');
    $(this).find('.navigation__dropdown').toggle();
  })
})

$(document).on('mouseup', function (e) {
  if (mainNavigationDropdownNode.has(e.target).length === 0) {
    mainNavigationDropdownNode.find('.navigation__dropdown').hide();
  }
});