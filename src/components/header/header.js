const { each } = require("jquery")

const headerMenuBurgerNode = $('.js-header__menu-burger')

headerMenuBurgerNode.each(function(){
  $(this).on('click', function(){
    $(this).toggleClass('header__active')
  })
})
