const mainNavigationDropdownNode = $('.navigation__item_dropdown')

mainNavigationDropdownNode.each(function(){
  $(this).on('click', function(){
    $(this).toggleClass('navigation__dropdown_open')
  })
})
