$(document).ready(function(){

	const checkboxDropdown = $('.js-checkbox .checkbox__header')

	checkboxDropdown.on('click', function(){
		if ($(this).parent().find('.checkbox__item').length){
			$(this).parent().find('.checkbox__item').toggle()

			return false
		}
	})

})